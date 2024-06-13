const mongoose = require('mongoose');

const Stasiun = mongoose.model('Stasiun', {
    namaStasiun: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
});

module.exports = Stasiun;