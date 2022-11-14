const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");

router.get("/", async (req, res) => {
  return res.render("login");
});

router.get("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/add", userController.add);

router.use("/results", require("./result"));

module.exports = router;
