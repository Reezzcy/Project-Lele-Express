const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = User;
