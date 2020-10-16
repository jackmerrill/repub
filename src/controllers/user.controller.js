const sequelize = require("../database")
const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

module.exports = class UserController {
    constructor() {
        userModel.sync().then((model) => {
            this.model = model
        })
    }

    async create(username, password, email, callback) {
        bcrypt.hash(password, 10, async function(err, enc) {
            await userModel.create({
                username,
                password: enc,
                email
            })
            var token = await jwt.sign({
                username,
                enc
            }, process.env.SECRET_KEY)
            callback(token)
        })
    }

    async login(username, password, callback) {
        var user = await userModel.findAll({ where: { username: username }, limit: 1})
        console.log(user)
        bcrypt.compare(user.password, password, async function(err, result) {
            if (result) {
                var token = await jwt.sign({
                    username,
                    password
                }, process.env.SECRET_KEY)
                callback(result, token)
            } else {
                callback(result)
            }
        })
    }
}