const Sequelize = require('sequelize');
const database = require('../db');
const Categoria = require('./Category');

const News = database.define('noticia', {
    id:         { type: Sequelize.INTEGER,  autoIncrement: true, allowNull: false, primaryKey: true },
    title:      { type: Sequelize.STRING,   allowNull:  false },
    body:       { type: Sequelize.STRING,   allowNull: false },
    category:   { type: Sequelize.INTEGER },
    status:     { type: Sequelize.ENUM(['A', 'P', 'N']), defaultValue: 'P' }, // [A]ctive, [P]ending, [N]ot aproved
    midia:      { type: Sequelize.STRING } 
});

News.belongsTo(Categoria, { foreignKey: 'categoria', allowNull: false });

module.exports = News;