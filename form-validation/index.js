let express = require("express");
let app = express();
const { body, validationResult } = require("express-validator");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

var ValidationRegistration = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long")
    .trim()
    .isAlpha()
    .withMessage("Name must be alphabetic")
    .custom((value) => {
      if (value === "admin") {
        throw new Error("Name cannot be admin");
      }
      return true;
    }),
  body("mobile")
    .notEmpty()
    .withMessage("Mobile is required")
    .isNumeric()
    .withMessage("Mobile must be numeric"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be valid")
    .trim()
    .normalizeEmail(),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6, max: 10 })
    .withMessage("Password must be at least 6 characters long")
    .isStrongPassword()
    .withMessage("Password must be strong"),
  body("city")
    .isIn(["Mau", "Mathura", "Lucknow", "Varanasi", "Prayagraj"])
    .withMessage("City must be valid"),
];

app.get("/", (req, res) => {
  res.render("form", { error: 0 });
});

app.post("/api/user/register", ValidationRegistration, (req, res) => {
  let error = validationResult(req);
  console.log(error);
  if (error.isEmpty()) {
    return res.send(req.body);
  }
  res.render("form", { error: error.array() });
});

app.post("/api/user/register", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => console.log("server is running on port 3000"));
