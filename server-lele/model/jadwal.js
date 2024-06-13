const mongoose = require('mongoose');

const Jadwal = mongoose.model('Jadwal', {
    idKereta: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    idStasiunAwal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    idStasiunAkhir: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    tanggal: {
        type: Date,
        required: true
    },
    jam: {
        type: Date,
        require: true
    }
});

module.exports = Jadwal;