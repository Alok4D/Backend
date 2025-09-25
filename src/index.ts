import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const app: Application = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! 🚀");
});


// start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
