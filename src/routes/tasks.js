var express = require('express');
var router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });

const { 
    validateParams,
    deleteTask,
    createTask,
    getAllTasks, 
    renderTask,
    renderCreateTask
} = require('../middlewares/tasks');

router.delete('/:id', validateParams, deleteTask);

router.post('/', createTask);

router.get('/', getAllTasks, renderTask);

router.get('/create', renderCreateTask);

router.post('/create', upload.single('task_image'), createTask);

module.exports = router;