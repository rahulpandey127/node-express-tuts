import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let dbUrl = process.env.DB_URL;

export let dbconnect = () => {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};
