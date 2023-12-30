// user model
const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userRegID: {
        type: String,
        required: true,
        unique: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
    },
    userHostel: {
        type: String,
        required: true,
    },
    userBlock: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);


module.exports = User;

