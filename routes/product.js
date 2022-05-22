const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    console.log(err);
  }

  //!then
  // Product.find().then((data) => {
  //   res.json(data);
  // });
  // res.status(200).json({ massage: "hello" });
});

//?get element by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

//?delete element by id
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

//?delete element by id
router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.updateOne(
      { _id: req.params.id },
      { title: req.body.title }
    );
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});
router.post("/", (req, res) => {
  const product1 = new Product({
    title: req.body.title,
    desc: req.body.desc,
    color: req.body.color,
  });
  product1.save().then((data) => {
    res.json({ message: "product created succefully", data: data });
  });
  // const name = req.body.name;
  // const price = req.body.price;
  // res.status(201).json({
  //   message: "product created successfully",
  //   data: { name: name, price: price },
  // });
});
module.exports = router;
