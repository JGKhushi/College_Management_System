import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//TO CONNECT WITH DATABASE MAKE .ENV FILE AND ADD MONGO_URL=YOUR_MONGO_URL IN IT AND REPLACE YOUR_MONGO_URL WITH YOUR MONGO URL IN .ENV FILE

console.log(process.env.MONGO_URL);

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "COLLEGE_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error occured while connecting to database");
    });
};
