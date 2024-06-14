const express = require('express');

const {
    postUser,
    getUserId,
    getUserLogin,
    putEditUser
} = require('../controller/userController');

const router = express.Router();

router.post('/create', postUser);
router.get('/:id', getUserId);
router.get('/', getUserLogin);
router.put('/edit', putEditUser);

module.exports = router;
