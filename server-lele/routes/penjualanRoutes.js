const express = require('express');
const { adminMiddleware } = require('../middleware/auth');

const {
    getPenjualan,
    getPenjualanByTujuan,
    getPenjualanByKeberangkatan,
    getPenjualanByTanggal
} = require('../controller/penjualanController');

const router = express.Router();

router.get('/penjualan', adminMiddleware, getPenjualan);
router.get('/tujuan', adminMiddleware, getPenjualanByTujuan);
router.get('/keberangkatan', adminMiddleware, getPenjualanByKeberangkatan);
router.get('/tanggal', adminMiddleware, getPenjualanByTanggal);

module.exports = router;