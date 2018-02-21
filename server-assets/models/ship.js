var mongoose = require("mongoose")
var Schema = mongoose.Schema
var schemaName = "Ship"

var schema = new Schema({
    name: { type: String, required: true },
    type: { type: String },
    origin: { type: String }
})

module.exports = mongoose.model(schemaName, schema)