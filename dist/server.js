"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
const app_1 = require("./app");
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app_1.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map