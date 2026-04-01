import { toNodeHandler } from "better-auth/node";
import express, {Application} from "express"
import { auth } from "./app/lib/auth";
import { indexRoutes } from "./routes";

const app: Application = express();

app.all('/api/auth/', toNodeHandler(auth));

app.use(express.json());

app.use('/api/v1', indexRoutes)

//basic route
app.get("/", (req, res) => {
  res.send("API is running12");
});

export default app