import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatRoutes from "./src/chatRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat",chatRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Mini ChatGPT running on port ${process.env.PORT}`)
);