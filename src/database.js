const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite://./persist_data/database.db', { logging: false });

sequelize.sync({ force: true })

module.exports = sequelize