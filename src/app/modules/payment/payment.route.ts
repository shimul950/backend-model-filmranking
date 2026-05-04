import { Router } from "express";
import { paymentController } from "./payment.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { createPaymentSchema } from "./payment.validator";

const router = Router();

router.post(
  "/create-intent",
  checkAuth("ADMIN", "USER"),
  validateRequest(createPaymentSchema),
  paymentController.createPayment
);

export const paymentRoute = router;
