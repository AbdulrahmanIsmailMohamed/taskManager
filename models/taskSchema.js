const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        minLength: [3, "name can't be less 3 character"],
        maxLength: [20, "name can't be more than 20 character"]
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("tasks", tasksSchema)