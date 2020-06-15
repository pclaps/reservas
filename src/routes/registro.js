const express = require('express');
const router = express.Router();

const {
     renderRegister,
     createUser
} = require('../middlewares/registro');

router.get('/',renderRegister);
router.post('/', createUser);

module.exports = router;