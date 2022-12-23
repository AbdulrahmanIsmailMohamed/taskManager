const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
require('dotenv').config()

// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
app.use(express.static("./public"))

app.use('/api/v1/tasks', tasks);

app.use(notFound)
const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server Running of port ${port}...`));
    } catch (err) {
        console.log(err);
    }
}
start();
