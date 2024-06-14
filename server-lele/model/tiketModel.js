const mongoose = require('mongoose');

const Tiket = mongoose.model('Tiket', {
    idJadwal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    noBangku: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = Tiket;
