module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE')
    res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}