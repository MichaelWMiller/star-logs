var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = "Comment"

var schema = new Schema({
    topic: { type: String, required: true },
    stardate: { type: Date, required: true, default: Date.now() },
    logBody: { type: String },
    shipId: { type: ObjectId, ref: "Ship", required: true },
    logId: { type: ObjectId, ref: "Log", required: true }
})

module.exports = mongoose.model(schemaName, schema)