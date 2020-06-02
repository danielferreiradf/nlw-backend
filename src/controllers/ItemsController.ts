import { connection as knex } from "../database/connection";
import { Request, Response } from "express";

export const ItemsController = {
  async getAll(req: Request, res: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:5000/uploads/${item.image}`,
      };
    });

    return res.json(serializedItems);
  },
};
