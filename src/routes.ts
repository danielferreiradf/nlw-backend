import { Router } from "express";
import { PointsController } from "./controllers/PointsController";
import { ItemsController } from "./controllers/ItemsController";
import multer from "multer";
import { multerConfig } from "./config/multer";

export const routes = Router();

const upload = multer(multerConfig);

routes.get("/items", ItemsController.getAll);

routes.post("/points", upload.single("image"), PointsController.create);
routes.get("/points", PointsController.getAll);
routes.get("/points/:pointId", PointsController.get);
