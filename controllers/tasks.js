const getAllTasks = (req, res) => {
    res.send("all tasks")
}

const createTask = (req, res) => {
    res.send("create")
}

const getTask = (req, res) => {
    res.send("get task")
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