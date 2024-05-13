import { Router } from "express";
import { StatusCodes } from 'http-status-codes'

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá,dev");
});
router.post("/test", (req, res) => {
  console.log(req);

  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});
export { router };
