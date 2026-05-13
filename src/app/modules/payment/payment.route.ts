import { Router } from "express";
import { paymentController } from "./payment.controller";
import { checkAuth } from "../../middleware/checkAuth";


const router = Router();

router.post(
  "/checkout",
  checkAuth("ADMIN", "USER"),
  paymentController.createPayment
);


export const paymentRoute = router;
