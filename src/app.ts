import express from "express";
import morgan from "morgan";
import { clientRouter } from "./main/routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(clientRouter);

export { app };
