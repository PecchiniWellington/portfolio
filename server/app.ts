import express from "express";
import cors from "cors";
import morgan from "morgan";
import DB from "./config/db";

import * as dotenv from "dotenv";

dotenv.config();

import TaskRoute from "./routes/task.prova";

const app: express.Application = express();

DB();
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
  console.log("app works!!!");
});

app.use(TaskRoute);
