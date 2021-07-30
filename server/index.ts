import dotenv from "dotenv";
dotenv.config();

import expresss from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import connectDB from "./config/database";
// init Middleware
const app = expresss();
app.use(expresss.json());
app.use(expresss.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// routes
app.get("/", (req, res) => {
  res.json({ msg: "test" });
});

//database connect
connectDB();
// server config

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
