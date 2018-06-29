let path = require('path')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/view.html'))
    })

    app.get('/add', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/add.html'))
    })
    app.get('/all', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/all.html'))
    })
    app.get('/classic', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/classic.html'))
    })
    app.get('/new', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/new.html'))
    })
}