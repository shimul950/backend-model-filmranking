import  { Stripe } from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

const createCheckoutSession = async (
  userId: string,
  movieId: string,
  amount: number
) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",

    line_items: [
      {
        price_data: {
          currency: "bdt",
          product_data: {
            name: "Movie Access",
          },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      },
    ],

    metadata: {
      userId,
      movieId,
    },

    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  return {
    url: session.url,
  };
};

export const paymentService ={
  createCheckoutSession
}