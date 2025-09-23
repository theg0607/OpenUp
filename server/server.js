import express from "express";
const app = express();
import dotenv from "dotenv"
import cors from "cors";
import {fileURLToPath} from "url"
import { connectDb } from "./config/db.js";
import postRouter from "./routes/post.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import path from "path";
dotenv.config({ path: './config/config.env' });

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

connectDb();

app.use(cors());
app.use(express.static(path.join(__dirname,"public")))
app.use(
  express.json({
    limit: "100mb",
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/posts",postRouter);
app.use("/auth",authRouter);
app.use("/user",userRouter);
const port = process.env.PORT
app.listen(port, () => {
  console.log(`server is runing at localhost:${port}`);
});
