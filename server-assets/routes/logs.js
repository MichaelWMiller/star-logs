var router = require("express").Router();
var Logs = require("../models/log");

//GET ALL LOGS
router.get("/api/logs", (req, res, next) => {
    Logs.find(req.query)
        .then(logs => {
            res.send(logs);
        })
        .catch(next);
});

// GET A LOG
router.get("/api/logs/:id", (req, res, next) => {
    Logs.findById(req.params.id)
        .then(log => {
            if (!log) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(log);
        })
        .catch(next);
});

// CREATE LOG
router.post("/api/logs", (req, res, next) => {
    Logs.create(req.body)
        .then(log => {
            res.send(log);
        })
        .catch(next);
});

//DELETE a log
router.delete("/api/logs/:id", (req, res, next) => {
    Logs.findByIdAndRemove(req.params.id)
        .then(log => {
            if (!log) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(log);
        })
        .catch(next);
})


module.exports = { router };