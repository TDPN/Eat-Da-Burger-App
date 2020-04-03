var express = require("express");

var router = express.Router();

// Import the model (orm.js) to use its database functions.
var orm = require("../config/orm");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render("index");
});

// Export routes for server.js to use.
module.exports = router;