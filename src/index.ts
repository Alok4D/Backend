import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { courseRoutes } from "./app/models/course/course.routes";
import { mentorRoutes } from "./app/models/Mentor/mentor.routes";

dotenv.config();

export const app: Application = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

//Routes

app.use("/api/courses", courseRoutes);
app.use("/api/metors", mentorRoutes);


// test route
app.get("/", (req: Request, res: Response) => {
  res.send(" LMS Server is Running 🚀");
});

// start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
