var router = require("express").Router();
var Comments = require("../models/comment");

//GET ALL COMMENTS
router.get("/api/comments", (req, res, next) => {
    Comments.find(req.query)
        .then(comments => {
            res.send(comments);
        })
        .catch(next);
});

// GET A COMMENT
router.get("/api/comments/:id", (req, res, next) => {
    Comments.findById(req.params.id)
        .then(comment => {
            if (!comment) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(comment);
        })
        .catch(next);
});

// CREATE COMMENT
router.post("/api/comments", (req, res, next) => {
    Comments.create(req.body)
        .then(comment => {
            res.send(comment);
        })
        .catch(next);
});

//DELETE a comment
router.delete("/api/comments/:id", (req, res, next) => {
    Comments.findByIdAndRemove(req.params.id)
        .then(comment => {
            if (!comment) {
                return res.status(400).send({ error: "Invalid id" });
            }
            return res.send(comment);
        })
        .catch(next);
})


module.exports = { router };