const mongoose = require('mongoose');

const Kereta = mongoose.model('Kereta', {
    namaKereta: {
        type: String,
        required: true
    },
    jumlahGerbong: {
        type: String,
        required: true
    }
});

module.exports = Kereta;
