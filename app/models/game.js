let Sequelize = require('sequelize')
let sequelize = require('../config/connection')

let Game = sequelize.define('game', {
    title: Sequelize.STRING,
    developer: Sequelize.STRING,
    console: Sequelize.STRING,
    year: Sequelize.INTEGER
})

Game.sync()

module.exports = Game