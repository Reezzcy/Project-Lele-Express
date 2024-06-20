const express = require('express');
const { adminMiddleware } = require('../middleware/auth');

const {
    postJadwal,
    getAllJadwal,
    getJadwalById,
    getJadwalByTujuan,
    getJadwalByKeberangkatan,
    getJadwalByTanggal,
    putJadwal,
    deleteJadwal,
    postKereta,
    getAllKereta,
    putKereta,
    deleteKereta,
    getAllStasiun
} = require('../controller/dashboardController');

const router = express.Router();

router.get('/jadwal', getAllJadwal);
router.get('/tujuan', getJadwalByTujuan);
router.get('/keberangkatan', getJadwalByKeberangkatan);
router.get('/tanggal', getJadwalByTanggal);

// router.get('/kereta', adminMiddleware, getAllKereta);
// router.post('/add-jadwal', adminMiddleware, postJadwal);
// router.put('/edit-jadwal', adminMiddleware, putJadwal);
// router.delete('/delete-jadwal', adminMiddleware, deleteJadwal);
// router.post('/add-kereta', adminMiddleware, postKereta);
// router.put('/edit-kereta', adminMiddleware,putKereta);
// router.delete('/delete-kereta', adminMiddleware,deleteKereta);

router.get('/stasiun', getAllStasiun);
router.get('/kereta', getAllKereta);
router.get('/jadwal-id', getJadwalById);
router.post('/add-jadwal', postJadwal);
router.put('/edit-jadwal', putJadwal);
router.delete('/delete-jadwal', deleteJadwal);
router.post('/add-kereta', postKereta);
router.put('/edit-kereta', putKereta);
router.delete('/delete-kereta', deleteKereta);

module.exports = router;