import { toNodeHandler } from "better-auth/node";
import express, {Application} from "express"
import { auth } from "./app/lib/auth";
import { indexRoutes } from "./routes";
import { paymentController } from "./app/modules/payment/payment.controller";
import cookieParser from 'cookie-parser';
import path from "path"

const app: Application = express();

app.set("view engine", "ejs")
app.set("views", path.resolve(process.cwd(), `src/app/templates`))

app.all('/api/auth/', toNodeHandler(auth));

// Stripe webhook needs raw request body for signature verification
app.post(
  "/api/v1/payment/webhook",
  express.raw({ type: "application/json" }),
  paymentController.stripeWebhook
);

//middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Enable URL-encoded form data parsing
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', indexRoutes)

//basic route
app.get("/", (req, res) => {
  res.send("API is running12");
});

export default app