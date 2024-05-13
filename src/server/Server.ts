import express from "express";
import "dotenv/config";

import { router } from "./routes";

const server = express();

server.use(express.json());

server.use(router);
// server.post("/test", (req, res) => {
//   return res.send("Olá, DEV!");
// });

export { server };
