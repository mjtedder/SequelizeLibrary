let Sequelize = require('sequelize')

let sequelize = new Sequelize('sequelize_library', 'root', '1125mt!Sql', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize