const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Member = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    squad: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Equipe"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Member', Member);
