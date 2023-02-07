const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/auth.ctrl");

router.post("/login", userCtrl.login); // Login user

module.exports = router;
