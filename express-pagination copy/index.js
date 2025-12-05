import express from "express";
import mongoose from "mongoose";
import users from "./models/users.model.js";
import bodyParser from "body-parser";
let app = express();

app.use(express.static("public"));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("registration");
});

app.get("/api/allusers", async (req, res) => {
  //   let usersData = await users.find({});
  //   res.status(201).json(users);
  let { page = 1, limit = 2 } = req.query;
  let usersData = await users.paginate(
    {},
    { page: parseInt(page), limit: parseInt(limit) }
  );
  console.log(usersData);
  //   res.send(usersData);
  res.render("dashboard", { users: usersData });
});

app.post("/api/createuser", async (req, res) => {
  let { name, email, mobile, city } = req.body;
  console.log(req.body);
  let user = await users.insertOne({
    name,
    email,
    mobile,
    city,
    createdAt: new Date(),
  });
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  mongoose
    .connect("mongodb://127.0.0.1:27017/bankdatabase")
    .then((res) => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
});
