const mongoose = require('mongoose');

const Jadwal = mongoose.model('Jadwal', {
    idKereta: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Kereta'
    },
    idStasiunAwal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Stasiun'
    },
    idStasiunAkhir: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Stasiun'
    },
    tanggal: {
        type: String,
        required: true
    },
    jam: {
        type: String,
        require: true
    }
});

module.exports = Jadwal;