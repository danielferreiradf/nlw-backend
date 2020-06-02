import { Router } from "express";
import { PointsController } from "./controllers/PointsController";
import { ItemsController } from "./controllers/ItemsController";

export const routes = Router();

routes.post("/points", PointsController.create);
routes.get("/items", ItemsController.getAll);
