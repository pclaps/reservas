var express = require('express');
var router = express.Router();

const { 
    renderRenderImage
} = require('../middlewares/image');

router.get('/:id', renderRenderImage);

module.exports = router;