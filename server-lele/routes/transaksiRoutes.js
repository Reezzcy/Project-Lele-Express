const express = require('express');
const { userMiddleware } = require('../middleware/auth');

const {
    postTiket,
    getTiketByUser,
    getTiketByJadwal,
    getTiketByTujuan,
    getTiketByKeberangkatan,
    getTiketByTanggal,
    getDetailTiket
} = require('../controller/transaksiController');

const router = express.Router();

router.post('/add-tiket', userMiddleware, postTiket);
router.get('/jadwal', userMiddleware, getTiketByJadwal);
router.get('/tujuan', userMiddleware, getTiketByTujuan);
router.get('/keberangkatan', userMiddleware, getTiketByKeberangkatan);
router.get('/tanggal', userMiddleware, getTiketByTanggal);
router.get('/detail', userMiddleware, getDetailTiket);
router.get('/id', userMiddleware, getTiketByUser)

module.exports = router;