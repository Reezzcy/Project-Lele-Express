const express = require('express');

const {
    postUser,
    getUserId,
    postUserLogin,
    putEditUser
} = require('../controller/userController');

const router = express.Router();

router.post('/add', postUser);
router.get('/id', getUserId);
router.post('/login', postUserLogin);
router.put('/edit', putEditUser);

module.exports = router;
