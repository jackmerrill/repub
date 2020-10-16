const { DataTypes } = require('sequelize')
const sequelize = require('../database').sequelize

module.exports = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    votes: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0
    }
})