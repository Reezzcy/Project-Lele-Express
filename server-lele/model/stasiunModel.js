const mongoose = require('mongoose');

const Stasiun = mongoose.model('Stasiun', {
    namaStasiun: {
        type: String,
        required: true
    }
});

module.exports = Stasiun;
