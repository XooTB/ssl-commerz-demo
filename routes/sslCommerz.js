import express from "express";
import {
  sslInit,
  success,
  failed,
  canceled,
} from "../controllers/SSLController.js";

const router = express.Router();

router.post("/init", sslInit);

router.post("/success", success);

router.post("/failed", failed);

router.post("/cancelled", canceled);

export default router;
