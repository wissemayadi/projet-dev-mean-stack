const { Schema, model } = require("mongoose");

const championnat = new Schema(


{
    nom: { type: String },
    typeChampionnat: { type: []},
    equipe: { type: []  },
    terrain: { type:[]},
    arbitre: { type: [] },
    score: { type: Number },
  });
  
  module.exports = Championnat =model("championnat", championnat);