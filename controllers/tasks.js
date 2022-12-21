const Task = require('../models/taskSchema');

const getAllTasks = (req, res) => {
    res.send("all tasks")
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task })
    } catch (err) {
        res.status(500).json({ err: err })
    }
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}
const deleteTask = (req, res) => {
    res.send("delete")
}
const updateTask = (req, res) => {
    res.send("update")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}