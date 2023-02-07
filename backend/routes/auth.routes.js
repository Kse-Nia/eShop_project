const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/auth.ctrl");

router.post("/register", userCtrl.register); // Register user
router.post("/login", userCtrl.login); // Login user
router.get("/:id", userCtrl.getUserAccount); // Logout user

module.exports = router;
