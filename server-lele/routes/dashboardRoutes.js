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
    putKereta,
    deleteKereta
} = require('../controller/dashboardController');

const router = express.Router();

router.get('/jadwal', getAllJadwal);
router.get('/tujuan', getJadwalByTujuan);
router.get('/keberangkatan', getJadwalByKeberangkatan);
router.get('/tanggal', getJadwalByTanggal);

router.get('/kereta', adminMiddleware, getAllKereta);
router.post('/add-jadwal', adminMiddleware, postJadwal);
router.put('/edit-jadwal', adminMiddleware, putJadwal);
router.delete('/delete-jadwal', adminMiddleware, deleteJadwal);
router.post('/add-kereta', adminMiddleware, postKereta);
router.put('/edit-kereta', adminMiddleware,putKereta);
router.delete('/delete-kereta', adminMiddleware,deleteKereta);

module.exports = router;
