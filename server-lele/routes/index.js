const express = require('express');
const dashboardRoutes = require('./dashboardRoutes');
const penjualanRoutes = require('./penjualanRoutes');
const transaksiRoutes = require('./transaksiRoutes');
const userRoutes = require('./userRoutes');
const { showLogin, processLogin } = require('../controller/loginController');

const router = express.Router();

router.get('/', showLogin);
router.post('/login', processLogin);

router.use('/dashboard', dashboardRoutes);
router.use('/penjualan', penjualanRoutes);
router.use('/transaksi', transaksiRoutes);
router.use('/user', userRoutes);

module.exports = router;
