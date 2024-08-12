const express = require("express");

const {getTest} = require("../controllers/testControllers");

const router = express.Router();

router.route("/").get(getTest);

module.exports = router;
