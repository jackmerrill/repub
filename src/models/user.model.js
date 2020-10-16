const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database')

module.exports = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissions: {
        type: DataTypes.STRING,
        allowNull: true
    },
    votes: {
        type: DataTypes.STRING,
        allowNull: true
    }
})