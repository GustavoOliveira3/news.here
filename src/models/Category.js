const Sequelize = require('sequelize');
const database = require('../db');

const Category = database.define('category', {
    id:            { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    description:   { type: Sequelize.STRING, allowNull: false },
    status:        { type: Sequelize.ENUM(['A', 'I']), defaultValue: 'A' } // [A]ctive, [I]nactive
});

module.exports = Category;