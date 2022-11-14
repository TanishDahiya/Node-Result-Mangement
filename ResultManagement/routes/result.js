const express = require("express");
const resultRouter = express.Router();
const resultController = require("../controllers/result_controller");

resultRouter.get("/", resultController.findAll);

resultRouter.post("/find", resultController.findOne);

resultRouter.post("/add", resultController.add);

resultRouter.get("/edit", resultController.getEdit);

resultRouter.post("/edit", resultController.postEdit);

resultRouter.get("/delete", resultController.delete);

module.exports = resultRouter;
