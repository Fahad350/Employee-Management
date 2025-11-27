import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./connection/db.js";
import userRouter from "./router/userRouter.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use("/api/v1", userRouter);
app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});

export default app;
