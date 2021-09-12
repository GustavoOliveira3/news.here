const Sequelize = require('sequelize');
const database = require('../db');
const Category = require('./Category');

const News = database.define('new', {
    id:         { type: Sequelize.INTEGER,  autoIncrement: true, allowNull: false, primaryKey: true },
    title:      { type: Sequelize.STRING,   allowNull:  false },
    body:       { type: Sequelize.STRING,   allowNull: false },
    category:   { type: Sequelize.INTEGER },
    status:     { type: Sequelize.ENUM(['A', 'P', 'N']), defaultValue: 'P' }, // [A]ctive, [P]ending, [N]ot aproved
    midia:      { type: Sequelize.STRING } 
});

News.belongsTo(Category, { foreignKey: 'category', allowNull: false });

module.exports = News;