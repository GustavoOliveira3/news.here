const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'news', // your database name
    'root', // username to acess to database
    '', // password to acess to database 
    {
        dialect: 'mysql', 
        host: 'localhost'
    });

module.exports = sequelize;