var express = require("express");

var router = express.Router();
// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

//get route
router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
    //callback response to call burger.selectAllBurger
    burger.all((burgerData) => {
        res.render("index", { burger_data: burgerData });
    });
});

//post route to redirect to index
router.post("/burgers/create", (req, res) => {
    // input for .addBurger
    burger.create(req.body.burger_name, (result) => {
        console.log(result);
        res.redirect("/");
    });
});

// put route to index
router.put("/burgers/:id", (req, res) => {
    burger.update(req.params.id, (result) => {
        console.log(result);
        res.sendStatus(200); //status 200 = successful 
    });
});

// Export routes for server.js to use.
module.exports = router;