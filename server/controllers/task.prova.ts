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
        res
          .status(201)
          .json({ message: "Post created successfully", task: result });
      })
      .catch((err: NativeError) => {
        res.status(500).json({ message: "server error" });
        next();
      });
    /* res.status(201).send({ ...req.body }); */
  } catch (error) {
    console.log(error);
  }
};
