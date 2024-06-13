const mongoose = require('mongoose');

const Kereta = mongoose.model('Kereta', {
    namaKereta: {
        type: String,
        required: true
    },
    gerbong: {
        type: String,
        required: true
    },
    jumlahBangku: {
        type: String,
        required: true
    },
});

module.exports = Kereta;