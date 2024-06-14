const express = require('express');

const {
    postUser,
    getUserId,
    getUserLogin,
    putEditUser
} = require('../controller/userController');

const router = express.Router();

router.post('', postUser);
router.get('', getUserId);
router.get('', getUserLogin);
router.put('', putEditUser);

module.export = router;
