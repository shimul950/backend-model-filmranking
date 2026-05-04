import Stripe from "stripe";
import { prisma } from "../../lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

const createPaymentIntent = async (userId: string, amount: number) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // cents
    currency: "bdt",
    metadata: {
      userId,
    },
  });

  // Save initial payment
  await prisma.payment.create({
    data: {
      userId,
      amount,
      currency: "bdt",
      provider: "STRIPE",
      status: "PENDING",
      transactionId: paymentIntent.id,
    },
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
};

const confirmPaymentFromWebhook = async (paymentIntent: Stripe.PaymentIntent) => {
  const existing = await prisma.payment.findFirst({
    where: {
      transactionId: paymentIntent.id,
    },
  });

  if (!existing) return;

  await prisma.payment.update({
    where: { id: existing.id },
    data: {
      status: paymentIntent.status === "succeeded" ? "SUCCESS" : "FAILED",
    },
  });
};

export const paymentService = {
  createPaymentIntent,
  confirmPaymentFromWebhook,
};