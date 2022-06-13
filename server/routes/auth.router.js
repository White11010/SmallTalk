const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth.controller");
const UserCreateValidator = require("../middlewares/validatiors/user/user.create.validator")

router
  .post("/login", AuthController.login)
  .post("/signup", UserCreateValidator, AuthController.signup);

module.exports = router;