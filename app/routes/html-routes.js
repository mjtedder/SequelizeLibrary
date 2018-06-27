let path = require('path')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/view.html'))
    })

    app.get('/add', (req, res) => {
        res.sendFile(path.join(_dirname, '../public/add.html'))
    })
}