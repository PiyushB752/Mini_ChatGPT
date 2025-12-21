import express from "express";
import { sendPrompt } from "../src/chatController.js";

const router = express.Router();

router.post("/", sendPrompt);

export default router;