const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema({
    name: String,
    completed: Boolean
});

module.exports = mongoose.model("tasks", tasksSchema)