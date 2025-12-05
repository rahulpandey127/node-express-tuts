const { name } = require("ejs");
let express = require("express");
let app = express();
//templet engine ejs
app.set("view engine", "ejs");
app.use(express.json()); //for json data accept
app.use(express.urlencoded({ extended: true })); //for form data accept
//Server start
app.listen(3000, () => {
  console.log("Server is running at PORT No. 3000");
});

// app.get("/", (req, res) => {
//   res.jsonp({name:"Rahul",salary:55000,city:"Varanasi"});
// });

// app.get("/about/user/:id-:book_id-:num", (req, res) => {
//   let id = req.params.id;
//   res.send(req.params);
// });

// app.get("/about/master", (req, res) => {
//   let name = req.query.name.toUpperCase();
//   let age = req.query.age;
//   let salary = req.query.salary;
//   res.send(`<div>
//         <div>NAME: ${name}</div>
//         <div>AGE: ${age}</div>
//         <div>SALARY: ${salary}</div>
//         </div>`);
// });
// console.log(__dirname);
//Redirect Page
app.get("/about", (req, res) => {
  res.redirect(301, "..");
});

let stu=[{name:"Rahul",age:23,salary:55000,city:"Varanasi"},{name:"tanya",age:21,salary:56000,city:"Delhi"}]
app.get("/user", (req, res) => {
  res.render("user", {stu});
});

// app.get("/user/register", (req, res) => {
//   res.send(req.hostname);
//   res.send(req.ip);
// res.send(req.ips);
//   res.send(req.method);
//   res.send(req.originalUrl);
//   res.send(req.path);
// res.send(req.protocol);
// res.send(req.secure);
// res.send(req.route);
//   if (req.accepts("html")) {
//     res.send("HTML");
//   } else if (req.accepts("json")) {
//     res.send({ name: "Rahul", salary: 55000, city: "Varanasi" });
//   }
// });

app.post("/details", (req, res) => {
  //   res.send(req.headers);
  //   res.send(req.get("connection"));
  if (req.is("application/json")) {
    res.send("valid json");
  } else if (req.is("text/html")) {
    res.send("valid html");
  } else {
    res.status(404).send("invalid content type");
  }
});

app.get("/error", (req, res) => {
  console.log(res.headersSent);
  res.status(404).send("Page not found");
  console.log(res.headersSent);
});

app.get("/success", (req, res) => {
  res.sendStatus(200);
});
//download file
// app.get("/users/download", (req, res) => {
//   res.download("./files/stetpaper.pdf", "document.pdf");
// });

app.get("/user/download", (req, res) => {
  res.download(__dirname + "/files/stetpaper.pdf");
});

app.get("/end", (req, res) => {
  res.write("Hello");
  res.end();
});

app.get("/check", (req, res) => {
  res.set("name", "Rahul Kumar Pandey");
  console.log(res.get("name"));
  res.send("Header is set");
});

//404 Page Not Found
app.use((req, res) => {
  res.send("<h1>404! Page not found</h1>");
});
