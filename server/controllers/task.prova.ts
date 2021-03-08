import TaskProva from "../models/task.prova";
import { ItaskProva } from "../interfaces/Itask";
import { Request, Response, NextFunction } from "express";
import { NativeError } from "mongoose";

export const createTaskProva = async (
  req: Request<ItaskProva>,
  res: Response,
  next: NextFunction
) => {
  try {
    const request: ItaskProva = req.body;
    const task: ItaskProva = new TaskProva(request);
    task
      .save()
      .then((result: ItaskProva) => {
        const response = res
          .status(201)
          .json({ message: "Post created successfully", task: result });
        if (!response) {
          throw new Error("Something went wrong!");
        }
      })
      .catch((error: NativeError) => {
        res.status(400).json({ message: error.message });
        next();
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
