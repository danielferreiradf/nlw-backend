import { Router } from "express";
import { celebrate, Joi } from "celebrate";
import { PointsController } from "./controllers/PointsController";
import { ItemsController } from "./controllers/ItemsController";
import multer from "multer";
import { multerConfig } from "./config/multer";

export const routes = Router();

const upload = multer(multerConfig);

routes.get("/items", ItemsController.getAll);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  PointsController.create
);
routes.get("/points", PointsController.getAll);
routes.get("/points/:pointId", PointsController.get);
