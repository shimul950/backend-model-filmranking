import express, {Application} from "express"

const app: Application = express();

//basic route
app.get("/", (req, res) => {
  res.send("API is running12");
});

export default app