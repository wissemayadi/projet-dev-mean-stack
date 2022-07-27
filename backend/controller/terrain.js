// include product model
const Terrain = require("../models/Terrain");

// create a new Product.
exports.terrain_create = function (req, res) {
  // validate request

  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.location ||
    !req.body.state ||
    !req.body.type ||
    !req.body.surface ||
    !req.body.capacity ||
    !req.body.centre ||
    !req.body.balances ||
    !req.body.phone 
  ) {
    return res.status(400).send({
      success: false,
      message: "Please enter verifie attributes",
    });
  }

  // create a product
  let terrain = new Terrain({
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
    state: req.body.state,
    type: req.body.type,
    surface: req.body.surface,
    capacity: req.body.capacity,
    phone: req.body.phone,
    centre: req.body.centre,
    balances: req.body.balances,


  });

  // save product in the database.
  terrain
    .save()
    .then((data) => {
      res.send({
        success: true,
        message: "terrain successfully created",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message:
          err.message || "Some error occurred while creating terrain.",
      });
    });
};

// retrieve and return all products.
exports.all_terrains = (req, res) => {
  Terrain.find()
    .then((data) => {
      var message = "";
      if (data === undefined || data.length == 0)
        message = "No terrain found!";
      else message = "Terrain successfully retrieved";

      res.send({
        success: true,
        message: message,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message:
          err.message || "Some error occurred while retrieving terrain.",
      });
    });
};

exports.terrain_name = (req, res) => {
  Centre.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          success: false,
          message: "Terrain not found with id " + req.params.id,
        });
      }
      res.send({
        success: true,
        message: "Terrain successfully retrieved",
        data: data.name,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          success: false,
          message: "Terrain not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: "Error retrieving product with id " + req.params.id,
      });
    });
};

// find a single product with a id.
exports.terrain_details = (req, res) => {
  Terrain.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          success: false,
          message: "Terrain not found with id " + req.params.id,
        });
      }
      res.send({
        success: true,
        message: "Terrain successfully retrieved",
        data: data,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          success: false,
          message: "Terrain not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: "Error retrieving product with id " + req.params.id,
      });
    });
};

// update a product  by the id.
exports.terrain_update = (req, res) => {
 
  // find terrain and update
  Terrain.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          success: false,
          message: "Terrain not found with id " + req.params.id,
        });
      }
      res.send({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          success: false,
          message: "Terrain not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: "Error updating Terrain with id " + req.params.id,
      });
    });
};



// delete a Terrain with the specified id.
exports.terrain_delete = (req, res) => {
  Terrain.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          success: false,
          message: "Terrain not found with id " + req.params.id,
        });
      }
      res.send({
        success: true,
        message: "Terrain successfully deleted!",
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          success: false,
          message: "Terrain not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: "Could not delete terrain with id " + req.params.id,
      });
    });
};
