const express = require("express");
// connecting to the model
const burger = require("../models/burger");

const router = express.Router();

// this code will direct the user to view the home page and all of the burgers in the current db
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// this code allows the user to add a new burger to the db
router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body, function (result) {
        res.status(200).end();
    });
});
this code allows the user to devour a burger, updated its status in the db
router.put("/api/burgers/:id", function (req, res) {
    const condition = { id: req.params.id };

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: true,
        },
        condition,
        function (result) {
            res.json(result)
            // res.status(200).end();
        }
    );
});


router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;