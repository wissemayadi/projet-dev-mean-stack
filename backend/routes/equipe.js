//CREATE
var express = require('express');
var router = express.Router();
var Equipe = require("../models/equipe");
var Member = require("../models/member");

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const savedEquipe = new Equipe(req.body);
    savedEquipe.save();

    res.send(savedEquipe);
  } catch (err) {
    res.send('Could not create this equipe.');
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedEquipe = await Equipe.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEquipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Equipe.findByIdAndDelete(req.params.id);
    res.status(200).json("Equipe has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/", async (req, res) => {
  try {
    const equipes = await Equipe.find()
      .exec();

    res.status(200).json(equipes);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/equipes/number", async (req, res) => {
  try {
    const equipes = await Equipe.find()
        .exec();

    res.status(200).json(equipes.length);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const Equipes = await Equipe.findOne({_id:req.params.id});
    res.status(200).json(Equipes);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
