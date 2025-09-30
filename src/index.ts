import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { productsRoutes } from "./app/models/Products/Product.Routes";
import { categoryRoute } from "./app/models/Category/Category.Routes";


dotenv.config();

export const app: Application = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/products', productsRoutes);

app.use("/api/categories", categoryRoute);


app.get("/", (req: Request, res: Response) => {
  res.send(" Eco Server is Running ");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
