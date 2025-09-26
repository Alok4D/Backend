import process = require("process");
import { app } from ".";
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  // await mongoose.connect(`${process.env.DATABASE_URL}`);
  await mongoose.connect(`mongodb+srv://backendFrist:OpMTpGNr3phpNVp1@cluster0.1yjndj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
