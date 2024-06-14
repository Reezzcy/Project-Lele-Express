const express = require('express');

const {
    getPenjualan,
    getPenjualanByTujuan,
} = require('../controller/penjualanController');

const router = express.Router();

router.get('', getPenjualan);
router.get('', getPenjualanByTujuan);

module.exports = router;