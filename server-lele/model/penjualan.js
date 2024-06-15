const mongoose = require('mongoose');

const Penjualan = mongoose.model('Penjualan', {
    idJadwal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    jumlahPenjualan: {
        type: String,
        required: true
    }
});

module.exports = Penjualan;