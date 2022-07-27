// include product model
const Centre = require("../models/Centre");

// create a new Product.
exports.centre_create = function (req, res) {
  // validate request

  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.location ||
    !req.body.terrain ||
    !req.body.phone 
  ) {
    return res.status(400).send({
      success: false,
      message: "Please enter verifie attributes",
    });
  }

  // create a product
  let centre = new Centre({
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
    terrain: req.body.terrain,
    phone: req.body.phone,



  });

  // save product in the database.
  centre
    .save()
    .then((data) => {
      res.send({
        success: true,
        message: "centre successfully created",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message:
          err.message || "Some error occurred while creating centre.",
      });
    });
};

// retrieve and return all products.
exports.all_centres = (req, res) => {
  Centre.find()
    .then((data) => {
      var message = "";
      if (data === undefined || data.length == 0)
        message = "No centre found!";
      else message = "Centre successfully retrieved";

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
          err.message || "Some error occurred while retrieving centre.",
      });
    });
};


// find a single product with a id.
exports.centre_details = (req, res) => {
  Centre.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          success: false,
          message: "Centre not found with id " + req.params.id,
        });
      }
      res.send({
        success: true,
        message: "Centre successfully retrieved",
        data: data,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          success: false,
          message: "Centre not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: "Error retrieving product with id " + req.params.id,
      });
    });
};

// update a product  by the id.
exports.centre_update = (req, res) => {
  /*
    // validate request
  if (!req.body.name || !req.body.price) {
    return res.status(400).send({
      success: false,
      message: "Please enter product name and price",
    });
  }
  */

  // find product and update
  Centre.findByIdAndUpdate(
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
          message: "Centre not found with id " + req.params.id,
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
          message: "Centre not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: "Error updating Centre with id " + req.params.id,
      });
    });
};

/////////// search

// delete a Centre with the specified id.
exports.centre_delete = (req, res) => {
  Centre.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          success: false,
          message: "Centre not found with id " + req.params.id,
        });
      }
      res.send({
        success: true,
        message: "Centre successfully deleted!",
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          success: false,
          message: "Centre not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: "Could not delete centre with id " + req.params.id,
      });
    });
};
