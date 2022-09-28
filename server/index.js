import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoute from "./routes/products.js";
import commentRoute from "./routes/comments.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.static("uploads"));

app.use("/api/products", productRoute);
app.use("/api/comments", commentRoute);

const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qbrgdfa.mongodb.net/?retryWrites=true&w=majority`
    );

    app.listen(PORT, () => {
      console.log("server started on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
