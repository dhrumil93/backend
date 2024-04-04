import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `\n MongoDB Connected: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.log("MONGO DB CONNECTION ERROR: ", error);
    process.exit(1);
  }
};
export default connectDB;
