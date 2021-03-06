import mongoose from "mongoose";
import { ItaskProva } from "../interfaces/Itask";

export const TaskProvaSchema = new mongoose.Schema<ItaskProva>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const TaskProva = mongoose.model<ItaskProva>("taskProva", TaskProvaSchema);
export default TaskProva;
