const express = require("express");
const router = express.Router();

// include product controller
const terrain_controller = require("../controller/terrain");

// routes
router.get("/", terrain_controller.all_terrains);


router.post("/create", terrain_controller.terrain_create);


router.get("/:id", terrain_controller.terrain_details);
router.put("/update/:id", terrain_controller.terrain_update);
router.delete("/delete/:id", terrain_controller.terrain_delete);
router.get("/name", terrain_controller.terrain_name);

module.exports = router;
