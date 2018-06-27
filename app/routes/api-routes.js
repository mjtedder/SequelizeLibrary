let Game = require('../models/game.js')

module.exports = (app) => {
    // Add sequelize code to get all books and return them as JSON
    app.get('/api/all', (req,res) => {
        Game.findAll({}).then((results) => {
            res.json(results)
        })
    })
}