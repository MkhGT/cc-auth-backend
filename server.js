import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import router from "./routes/route.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("database connected...");
} catch (error) {
  console.error(error);
}

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("Server running at port 3000"));
