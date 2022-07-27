//CREATE
var express = require('express');
var router = express.Router();
var Member = require("../models/member");
const mongoose = require("mongoose");
router.post("/", async (req, res) => {
    req.body.squad._id = mongoose.Types.ObjectId(req.body.squad._id)

    const newMember = new Member(req.body);
    try {
      const savedMember = await newMember.save();
      res.status(200).json(savedMember);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });
  
  //UPDATE
  router.put("/:id", async (req, res) => {
    console.log(req)
    try {

      const updatedMember = await Member.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMember);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id", async (req, res) => {
    try {
      await Member.findByIdAndDelete(req.params.id);
      res.status(200).json("Member has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // //GET ALL
  router.get("/", async (req, res) => {
    try {
      const Members = await Member.find();
      res.status(200).json(Members);
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get("/number", async (req, res) => {
  try {
    const Members = await Member.find();
    res.status(200).json(Members.length);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const Members = await Member.findOne({_id:req.params.id});
    res.status(200).json(Members);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/getBySquadId/:id", async (req, res) => {
  try {
    const Members = await Member.find({squad:req.params.id});
    res.status(200).json(Members);
  } catch (err) {
    res.status(500).json(err);
  }
});


  module.exports = router;
