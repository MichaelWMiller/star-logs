var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = "Log"

var schema = new Schema({
    stardate: { type: Date, required: true, default: Date.now() },
    typeLog: { type: String },
    topic: { type: String },
    shipId: { type: ObjectId, ref: "Ship", required: true }
})

module.exports = mongoose.model(schemaName, schema)