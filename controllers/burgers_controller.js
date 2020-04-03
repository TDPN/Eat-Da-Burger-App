var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
})
.post("/api/burgers", (req, res) => {
    burger.create(["burger_name"], [req.body.burger_name], result => {
        res.json({ id: result.insertId });
    })
})
.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    burger.update({
            devoured: req.body.devoured
        },
        condition, result => {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    )
    res.json(req.body)
})
.delete("/api/burgers/:id", (req,res) => {
    const condition = "id = " + req.params.id;
    burger.delete(condition, result => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
    res.json(req.body)
});
// Export routes for server.js to use.
module.exports = router;