const mongoose = require('mongoose');

const Penjualan = mongoose.model('Penjualan', {
    idJadwal: {
        type: String,
        required: true
    },
    jumlahPenjualan: {
        type: String,
        required: true
    }
});

module.exports = Penjualan;