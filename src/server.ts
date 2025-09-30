import process = require("process");
import { app } from ".";

const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
import dotenv from "dotenv";
dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://ecobazarUser:MFecG03RpJ5hBf9O@cluster0.1yjndj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
