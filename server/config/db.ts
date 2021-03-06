import mongoose from "mongoose";
import * as dotenv from "dotenv";

const uri: string | undefined = process.env.MONGO;

const DB = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://wellington:Wellingtonpecchini10@cluster0.q4fhv.mongodb.net/portfolio",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    if (!db) {
      throw new Error("not connected");
    }
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
export default DB;
