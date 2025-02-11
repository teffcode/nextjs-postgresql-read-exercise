import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import { ProductType } from "@/types/ProductType";

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const query = "SELECT * FROM products";
      const result = await pool.query<ProductType>(query);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error to get products 🥺" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed !" });
  }
};
