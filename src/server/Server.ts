import express from "express";

const server = express();

interface Teste {}

server.post("/test", (req, res) => {
  return res.send("Olá, DEV!");
});

export { server };
 