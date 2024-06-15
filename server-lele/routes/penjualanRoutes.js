const express = require('express');
const { adminMiddleware } = require('../middleware/auth');

const {
    getPenjualan,
    getPenjualanByTujuan,
} = require('../controller/penjualanController');

const router = express.Router();

router.get('/penjualan', adminMiddleware, getPenjualan);
router.get('/tujuan', adminMiddleware, getPenjualanByTujuan);

module.exports = router;