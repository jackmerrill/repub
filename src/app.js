var express = require('express');
var apiRouter = require('./routes/api')
var authRouter = require('./routes/auth')
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var logger = require('morgan')

require('dotenv').config();

const app = express();
const port = 3000 || process.env.PORT;

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/auth', authRouter)
app.use('/api', apiRouter);
app.use(cookieParser(process.env.SECRET_KEY))
app.all('/', async (req, res) => {
    res.send({
        "message": "Please use /api/",
        "error": true
    })
})

app.listen(port, () => {
  console.log(`Repub Server is now listening on port ${port}`);
});
