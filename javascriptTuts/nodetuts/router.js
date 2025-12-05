let express = require("express");
let mongoose = require("mongoose");
let app = express();
let port = 3000;

//model or schema use here and no need to call them
let user = require("./models/user.models");

app.set("view engine", "ejs");
app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my Home Page</h1>");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.render("form", req.body);
});

app.post("/user/reservation", (req, res) => {
  user.insertMany(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.status(200).send("Data inserted successfully", data);
    }
  });
});

app.get("/user/reservation", async (req, res) => {
  let userData = await user.find();
  res.json(userData);
});
app.listen(port, () => {
  console.log(`Server run at port number ${port}`);
  mongoose
    .connect("mongodb://127.0.0.1:27017/reservation")
    .then(() => {
      console.log("connected to database successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});
