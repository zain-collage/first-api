const express = require("express");
const app = express();
const ports = 3000;
const myRouter = require("./routes/product");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// //!Middleware
// app.use("/product", (req, res, next) => {
//   console.log("Middele ware was called");
//   next();
// });

// app.get("/product", (req, res) => {
//   //  res.send("Hello World!");
//   res.status(200).json({
//     name: "ahmad",
//     age: 20,
//     country: "syrai",
//   });
// });
//! Allow Access  Middel wear
app.use(cors());

//!BodyParser Middel wear
app.use(bodyParser.json());
//!Routes Middel wear
app.use("/product", myRouter);

mongoose.connect(
  "mongodb://localhost:27017/mydb",
  // "mongodb+srv://zain1:msyzmmbm5@cluster0.dtkat.mongodb.net/mydb?retryWrites=true&w=majority",
  () => {
    console.log("concted to mongo succefully");
    app.listen(process.env.Port || ports, () =>
      console.log(`Example app listening on port ${ports}!`)
    );
  }
);
