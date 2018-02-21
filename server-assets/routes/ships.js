var router = require("express").Router();
var Ships = require("../models/ship");
var Logs = require("../models/log");
var Comments = require("../models/comment")

//GET ALL SHIPS
router.get("/api/ships", (req, res, next) => {
    Ships.find(req.query)
        .then(ships => {
            res.send(ships);
        })
        .catch(next);
});

// GET A SHIP
router.get("/api/ships/:id", (req, res, next) => {
    Ships.findById(req.params.id)
        .then(ship => {
            if (!ship) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(ship);
        })
        .catch(next);
});

//Update a ship

router.put("/api/ships/:id", (req, res, next) => {
    Ships.findByIdAndUpdate(req.params.id, req.body)
        .then(ship => {
            if (!ship) {
                return res.status(400).send({ error: "Invalid id" })
            }
            return res.send(ship);
        })
        .catch(next)
})

// CREATE SHIP
router.post("/api/ships", (req, res, next) => {
    Ships.create(req.body)
        .then(ship => {
            res.send(ship);
        })
        .catch(next);
});

//create a log for a shipId
router.post("/api/ships/:id/logs", (req, res, next) => {
    req.body.shipId = req.params.id
    Logs.create(req.body)
        .then(log => {
            res.send(log)
        })
        .catch(next)
})

//DELETE a log
router.delete("/api/ships/:shipId/logs/:id", (req, res, next) => {
    Logs.findByIdAndRemove(req.params.id)
        .then(log => {
            if (!log) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(log);
        })
        .catch(next);
})

//Delete a comment for a logId for a shipId
router.delete("/api/ships/:shipId/logs/:logId/comments/:id", (req, res, next) => {
    req.body.shipId = req.params.shipId
    req.body.logId = req.params.logId
    Comments.findByIdAndRemove(req.params.id)
        .then(log => {
            if (!log) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(log);
        })
        .catch(next);
})

//Create a comment for a logId for a shipId
router.post("/api/ships/:shipId/logs/:logId/comments", (req, res, next) => {
    req.body.shipId = req.params.shipId
    req.body.logId = req.params.logId

    Comments.create(req.body)
        .then(comment => {
            res.send(comment)
        })
        .catch(next)
})




module.exports = { router };