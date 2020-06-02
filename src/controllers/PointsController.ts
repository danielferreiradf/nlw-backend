import { connection as knex } from "../database/connection";
import { Request, Response } from "express";

export const PointsController = {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = req.body;

    // Transaction to make sure next knex actions
    const trx = await knex.transaction();

    const point = {
      image: "image-test",
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const insertedIds = await trx("points").insert(point);

    const point_id = insertedIds[0];

    const pointsItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx("point_items").insert(pointsItems);

    return res.json({ id: point_id, ...point });
  },
};
