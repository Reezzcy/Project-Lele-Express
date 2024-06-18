const express = require('express');

const dashboardRoutes = require('./dashboardRoutes');
const penjualanRoutes = require('./penjualanRoutes');
const transaksiRoutes = require('./transaksiRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/user', dashboardRoutes);
router.use('/admin', dashboardRoutes);
router.use('/penjualan', penjualanRoutes);
router.use('/transaksi', transaksiRoutes);
router.use('/profile', userRoutes);

module.exports = router;
