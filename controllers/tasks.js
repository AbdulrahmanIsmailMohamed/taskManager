const Task = require('../models/taskSchema');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error });
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