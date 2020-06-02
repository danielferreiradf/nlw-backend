import { Router } from "express";
import { PointsController } from "./controllers/PointsController";
import { ItemsController } from "./controllers/ItemsController";

export const routes = Router();

routes.get("/items", ItemsController.getAll);

routes.post("/points", PointsController.create);
routes.get("/points", PointsController.getAll);
routes.get("/points/:pointId", PointsController.get);
