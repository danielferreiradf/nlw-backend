import { Router } from "express";
import { connection as knex } from "./database/connection";

export const routes = Router();

routes.get("/items", async (req, res) => {
  const items = await knex("items").select("*");

  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:5000/uploads/${item.image}`,
    };
  });

  return res.json(serializedItems);
});

routes.post("/points", async (req, res) => {
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

  await knex("points").insert({
    image: "image-test",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  return res.json({ success: true });
});
