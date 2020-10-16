const { DataTypes } = require('sequelize')
const sequelize = require('../database').sequelize

module.exports = sequelize.define('Settings', {
    setting: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
})