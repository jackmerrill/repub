var express = require('express');
const UserController = require('../controllers/user.controller');
var router = express.Router();
var database = require('../database')

router.post('/login', async function(req, res) {
    if (!req.body.username || !req.body.password) return res.send({ "message": "Missing Value.", "error": true })
    const uc = new UserController()

    uc.login(req.body.username, req.body.password, function(result, token) {
        if (!result) return res.send({ "message": "Incorrect Username or Password.", "error": true })

        res.send({
            "token": token,
            "error": false
        })
    })
});

router.post('/register', async function(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) return res.send({ "message": "Missing Value.", "error": true })
    const uc = new UserController()

    uc.create(req.body.username, req.body.password, req.body.email, function(token) {
        return res.send({
            "token": token,
            "error": false
        })
    })
})

module.exports = router
