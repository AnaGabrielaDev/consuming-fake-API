import { Router } from "express";
import { makeListClientController } from "../factories/makeListClientsController";

const clientRouter = Router();
const listClientController = makeListClientController();

clientRouter.get("/clients/list", (req, res) =>
	listClientController.get(req, res),
);

export { clientRouter };
