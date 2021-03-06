import express from "express";
const router = express.Router();
import { createTaskProva } from "../controllers/task.prova";

router.post("/create", createTaskProva);

export default router;
