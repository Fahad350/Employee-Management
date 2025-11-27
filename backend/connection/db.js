import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db coonected!");
  } catch (error) {
    console.log("db connection error");
  }
};
export default dbConnection;
