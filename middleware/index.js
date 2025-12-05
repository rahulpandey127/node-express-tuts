import express from "express";
let app = express();
let router = express.Router();

//application level middleware
// app.use((req, res, next) => {
//   console.log("This is application level middleware");
//   next();
// })

// app.get("/", (req, res) => {
//   res.sen("<h1>Home Page</h1>");
// });

// Error Level Middleware
// //404 middleware
// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

// //404 middleware
// app.use((req,res)=>{
//     res.send("<h1>Page not found</h1>")
// })

// // app.use("/", router);

// //500 server error middleware
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send("<h1>Something went wrong</h1>");
//   next();
// });

// Router level middleware

// router.use((req, res, next) => {
//   console.log(req.url);
//   console.log("This is middleware 1");
//   next();
// });

// router.use((req, res, next) => {
//   console.log(req.url);
//   console.log("This is middleware 2");
//   next();
// });

// router.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
// });

// router.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

// app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
