const errorHandlingMW = (err, req, res, nxt) => {
    res.status(500).json({ err })
}
module.exports = errorHandlingMW;