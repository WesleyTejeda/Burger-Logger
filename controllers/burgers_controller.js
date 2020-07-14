const express = require("express");
const router = express.Router();
let burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.selectAll(burgerData => {
        let handleObj = {
            burgers: burgerData
        }
        res.render("index", handleObj);
    })
});

router.post("/api/burger", (req, res) => {
    console.log(req.body.burgerName);
    burger.insertOne(["burger_name", "devoured"],[req.body.burgerName, false], result => {
        res.status(200).json({id: result.insertId});
    })
});

router.put("/api/burger/:id", (req, res) => {
    let condition = `id=${req.params.id}`;
    console.log(req.body);
    console.log(condition);
    burger.updateOne({
        burger_name: req.body.newBurgerName
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(500).json({message: `Error while updating ${req.body.burgerName}`});
        } else {
            res.status(200).end();
        }
    })
});

router.delete("/api/burger/:id", (req, res) => {
    console.log(req.params);
});


module.exports = router;

