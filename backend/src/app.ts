import dotenv from "dotenv";
import cors from "cors";
import express, { Application } from "express";
import connectDB from "./config/database";
import widgetRouter from "./routes/widgetRouter";

dotenv.config();
const app: Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

//Routes
app.use("/", widgetRouter);

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    console.log("Database connection establised");
    app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));
  })
  .catch((err: any) => {
    console.log(err);
  });
