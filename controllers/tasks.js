const Task = require('../models/taskSchema');
const asyncWrapper = require("../middleware/async")
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error });
    }
}

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
})

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) return res.status(404).json({ MSQ: `no task with id ${taskId}` })
    res.status(200).json({ task })
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    let task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) return res.status(404).json({ MSQ: `no task with id ${taskId}` })
    res.status(200).json({ task })
})
const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true, returnOriginal: false
    });
    if (!task) return res.status(404).json({ MSQ: `no task with id ${taskId}` });
    res.status(200).json({ task })
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}