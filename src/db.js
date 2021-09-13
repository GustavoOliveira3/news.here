const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    '', // your database name
    '', // username to acess to database
    '', // password to acess to database 
    {
        dialect: 'mysql', 
        host: 'localhost'
    });

module.exports = sequelize;
