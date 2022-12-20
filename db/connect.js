const mongoose = require("mongoose");

const connectDB = async (url) => {
    return await mongoose
        .set('strictQuery', false)
        .connect(url)
        .then(() => console.log("DataBase Connected"))
        .catch((err) => console.log(err));
}
module.exports = connectDB;