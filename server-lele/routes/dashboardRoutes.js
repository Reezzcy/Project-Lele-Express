const express = require('express');
const { adminMiddleware } = require('../middleware/auth');

const {
    postJadwal,
    getAllJadwal,
    getJadwalByTujuan,
    getJadwalByKeberangkatan,
    getJadwalByTanggal,
    putJadwal,
    deleteJadwal,
    postKereta,
    getAllKereta,
    putKereta
} = require('../controller/dashboardController');

const router = express.Router();

router.get('/jadwal', getAllJadwal);
router.get('/kereta', getAllKereta);
router.get('/tujuan', getJadwalByTujuan);
router.get('/keberangkatan', getJadwalByKeberangkatan);
router.get('/tanggal', getJadwalByTanggal);

router.put('/jadwal', adminMiddleware, putJadwal);
router.delete('/delete-jadwal', adminMiddleware, deleteJadwal);
router.post('/add-kereta', adminMiddleware, postKereta);
router.post('/add-jadwal', adminMiddleware, postJadwal);
router.put('/edit-kereta', adminMiddleware,putKereta);

module.exports = router;
