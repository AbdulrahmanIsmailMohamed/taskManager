module.exports = (asyncWrapper) => {
    return async function (req, res, nxt) {
        try {
            await asyncWrapper(req, res)
        } catch (error) {
            nxt(error)
        }
    }
}