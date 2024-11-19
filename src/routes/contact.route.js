const router = require("express").Router();

const contactController = require("../controllers/contact.controller");

console.log(typeof contactController.findAll);
router.get("/", contactController.findAll);

router.get("/:id", contactController.findById);

router.post("/", contactController.create);

router.put("/:id", contactController.update);

router.delete("/:id", contactController.delete);

module.exports = router;