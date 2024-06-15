const express = require('express');
const { userMiddleware } = require('../middleware/auth');

const {
    postTiket,
    getTiketByJadwal,
    getTiketByTujuan,
    getTiketByKeberangkatan,
    getTiketByTanggal,
    getDetailTiket
} = require('../controller/transaksiController');

const router = express.Router();

router.post('/add', userMiddleware, postTiket);
router.get('/jadwal', userMiddleware, getTiketByJadwal);
router.get('/tujuan', userMiddleware, getTiketByTujuan);
router.get('/keberangkatan', userMiddleware, getTiketByKeberangkatan);
router.get('/tanggal', userMiddleware, getTiketByTanggal);
router.get('/detail', userMiddleware, getDetailTiket);

module.exports = router;
