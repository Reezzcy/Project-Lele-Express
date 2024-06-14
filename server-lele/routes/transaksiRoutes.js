const express = require('express');

const {
    postTiket,
    getTiketByJadwal,
    getTiketByTujuan,
    getTiketByKeberangkatan,
    getTiketByTanggal,
    getDetailTiket
} = require('../controller/transaksiController');

const router = express.Router();

router.post('', postTiket);
router.get('', getTiketByJadwal);
router.get('', getTiketByTujuan);
router.get('', getTiketByKeberangkatan);
router.get('', getTiketByTanggal);
router.get('', getDetailTiket);

module.export = router;
