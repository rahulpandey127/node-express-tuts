import express from "express";
const app = express();
// import path from "path";
// const __dirname = import.meta.dirname;
//all files are imported here
import { dbconnect } from "./config/dbconnect.js";
import router from "./routers/user.router.js";
import bodyParser from "body-parser";
import cors from "cors";
// console.log(path.join(__dirname, "/public"));
//view engine ejs
app.set("view engine", "ejs");

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

//database connection and server start
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  dbconnect();
});
