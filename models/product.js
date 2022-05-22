const mongoose = require("mongoose");

const productModel = mongoose.Schema({
  // type:{
  //     type:String,
  //     required=true,
  // },
  title: String,
  desc: String,
  color: String,
});
module.exports = mongoose.model("products", productModel);
