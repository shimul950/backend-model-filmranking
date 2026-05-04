import { Request, Response } from "express";
import  status  from "http-status";
import Stripe from "stripe";
import { paymentService } from "./payment.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

// Create payment intent
const createPayment = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId; // from auth middleware
  const { amount } = req.body;

  const result = await paymentService.createPaymentIntent(userId, amount);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Payment intent created successfully",
    data: result,
  });
});

// Webhook (VERY IMPORTANT)
const stripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err ) {
    return res.status(400).send(`Webhook Error`,err);
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    await paymentService.confirmPaymentFromWebhook(paymentIntent);
  }

  res.json({ received: true });
};

export const paymentController = {
  createPayment,
  stripeWebhook,
};