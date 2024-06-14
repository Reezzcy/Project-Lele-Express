const express = require('express');
const dashboardRoutes = require('./dashboardRoutes');
const penjualanRoutes = require('./penjualanRoutes');
const transaksiRoutes = require('./transaksiRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('', dashboardRoutes);
router.use('', penjualanRoutes);
router.use('', transaksiRoutes);
router.use('', userRoutes);

module.exports = router;