const express = require('express');

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

router.post('', postJadwal);
router.get('', getAllJadwal);
router.get('', getJadwalByTujuan);
router.get('', getJadwalByKeberangkatan);
router.get('', getJadwalByTanggal);
router.put('', putJadwal);
router.delete('', deleteJadwal);
router.post('', postKereta);
router.get('', getAllKereta);
router.put('', putKereta);

module.export = router;