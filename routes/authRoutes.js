const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddelware = require("../middlewares/authMiddelware");
const router = express.Router();

//routes

//REGISTER ROUTES
router.post("/register", registerController);
// LOGIN ROUTES
router.post("/login", loginController);

//GET CURRENT USER
router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;
