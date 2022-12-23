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

const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        if (!task) return res.status(404).json({ MSQ: `no task with id ${taskId}` })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ error });
    }
}
const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        let task = await Task.findOneAndDelete({ _id: taskId });
        if (!task) return res.status(404).json({ MSQ: `no task with id ${taskId}` })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ error })
    }
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