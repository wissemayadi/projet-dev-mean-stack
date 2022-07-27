const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Equipe = new Schema(
  {
    name: { type: String, required: true },
    maxSize: { type: String, required: true },
    logo: {type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model('Equipe', Equipe);
