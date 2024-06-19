const express = require('express');

const {
    postUser,
    getUserId,
    postUserLogin,
    putEditUser
} = require('../controller/userController');

const { 
    getSession
} = require('../middleware/auth');

const router = express.Router();

router.post('/add', postUser);
router.get('/id', getUserId);
router.post('/login', postUserLogin);
router.put('/edit', putEditUser);
router.get('/session', getSession);

module.exports = router;
