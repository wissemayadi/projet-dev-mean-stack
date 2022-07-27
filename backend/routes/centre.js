const express = require("express");
const router = express.Router();

// include product controller
const centre_controller = require("../controller/centre");

// routes
router.get("/", centre_controller.all_centres);


router.post("/create", centre_controller.centre_create);


 router.get("/:id", centre_controller.centre_details);
router.put("/update/:id", centre_controller.centre_update);
router.delete("/delete/:id", centre_controller.centre_delete);

module.exports = router;
