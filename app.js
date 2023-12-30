// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./src/routes/user.route');


// Middleware to parse JSON requests
app.use(express.json());
app.use('http://localhost:3000/api/v1/user', userRouter);


module.exports = app;