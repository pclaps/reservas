const path = require('path');

const renderRenderImage = (req, res, next) => {
    res.sendFile(req.params.id, { root: path.join(__dirname, '../uploads') });
}

module.exports = {
    renderRenderImage,
}