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
        type: String,
        required: true
    },
    jam: {
        type: String,
        require: true
    }
});

module.exports = Jadwal;
