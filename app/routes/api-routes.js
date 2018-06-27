let Game = require('../models/game.js')

module.exports = (app) => {
    // Get all games
    app.get('/api/all', (req,res) => {
        Game.findAll({}).then((results) => {
            res.json(results)
        })
    })
    // Get a specific game
    app.get('/api/:game', (req, res) => {
        Game.findAll({
            where: {
                title: req.params.game
            }
        }).then((results) => {
            res.json(results)
        })
    })
    // Get all games on a specific console
    app.get('/api/console/:console', (req, res) => {
        Game.findAll({
            where: {
                genre: req.params.console
            }
        }).then((results) => {
            res.json(results)
        })
    })
    // Get all games from a specific developer
    app.get('/api/developer/:developer', (req, res) => {
        Game.findAll({
            where: {
                developer: req.params.developer
            }
        }).then((results) => {
            res.json(results)
        })
    })

    // Get all previous gen games (games released before 2013)
    app.get('/api/games/classic', (req, res) => {
        Game.findAll({
            where: {
                year: {
                    $lte: 2012
                }
            },
            order: [['year', 'DESC']]
        }).then((results) => {
            res.json(results)
        })
    })

    //Get all current gen games (games released on or after 2013)
    app.get('/api/games/new', (req, res) => {
        Game.findAll({
            where: {
                year: {
                    $gte: 2013
                }
            },
            order: [['year', 'ASC']]
        }).then((results) => {
            res.json(results)
        })
    })

    // Add a game
    app.post('/api/new', (req, res) => {
        console.log('Game Data:')
        console.log(req.body)
        Game.create({
            title: req.body.title,
            developer: req.body.developer,
            console: req.body.console,
            year: req.body.year
        })
    })

    // Delete a game from DB
    app.post('/api/delete', (req, res) => {
        console.log('Game Data:')
        console.log(req.body)
        Book.destroy({
            where: {
                id: req.body.id
            }
        })
    })
}