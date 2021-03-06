import mongoose from "mongoose";
export interface ItaskProva extends mongoose.Document {
  title: String;
  description?: String;
}
