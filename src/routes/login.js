const express = require('express');
const router = express.Router();

const {
     renderLogin,
     userLogin
} = require('../middlewares/login');

router.get('/',renderLogin);
router.post('/', userLogin);

module.exports = router;