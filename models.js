const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  desc: { type: String },
});

const itemModel = mongoose.model("itemModel", itemSchema);

module.exports = itemModel;
