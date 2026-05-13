import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";
import { paymentService } from "./payment.service";
import status from "http-status";
import Stripe from "stripe";
import { prisma } from "../../lib/prisma";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2026-04-22.dahlia",
// });

const createPayment = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const { movieId, amount } = req.body;

  const result = await paymentService.createCheckoutSession(
    userId,
    movieId,
    amount
  );

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Checkout session created",
    data: result,
  });
});

const stripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;

  try {
    event = Stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.log(err);
    return res.status(400).send("Webhook Error");
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId = session.metadata?.userId;
    const mediaId = session.metadata?.movieId;

    await prisma.payment.create({
      data: {
        userId: userId!,
        mediaId: mediaId!,
        amount: (session.amount_total || 0) / 100,
        currency: session.currency || "bdt",
        provider: "STRIPE",
        status: "SUCCESS",
        transactionId: session.id,
      },
    });
  }

  res.json({ received: true });
};

export const paymentController = {
  createPayment, 
  stripeWebhook
}