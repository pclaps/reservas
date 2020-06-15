const connection = require('../database');

const validateParams = (req, res, next) => {
    res.juan = 'hola';
    if(isNaN(req.params.id)) {
        res.status(404).send({
            success: false,
            message: "El parametro es invalido"
        });
    } else {
        next();
    }
};

const deleteTask = (req, res, next) => {
     console.log(res.juan);
    // eliminar la tarea aca
     res.status(200).send({
     success: true,
    });
};

const createTask = (req, res, next) => {

    console.log('Image', req.file);

    const { name , description } = req.body;
    
    const newTask  = {
        name,
        description
    };

    if (req.file) {
        Object.assign(newTask, {
            image_id:  req.file.filename,
        });
    };

    connection.query('INSERT INTO task SET ?', newTask,  (error, results, fields) => {
        if (error) throw error;
        res.redirect('/tasks')
    });
}
/*
const Task = require('../../models/task');
//Handlers para los endpoints de la API de Tasks

router.get('/:id', (req, res, next) => {
    Task.getAllTaskById(req.params.id)
        .then(task => {
            res.json({
                task,
            });
        })
        .catch(err => {
            next(err);
        });
});

router.get('/', (req, res, next) => {
    Task.getAllTasks()
        .then(tasks => {
            res.json({
                tasks,
            });
        })
        .catch(err => {
            next(err);
        });
});
*/
const getAllTasks = (req, res, next) => {
    connection.query("SELECT * FROM task", (err, result, fields) => {
        if (err) {
            throw err;
        } else {
            res.tasks = result;
            next();
        }
    });
}

const renderTask = (req, res, next) => {
    res.render('tasks',{
        tasks: res.tasks
    });
}

const renderCreateTask = (req, res, next) => {
    res.render('create-tasks');
}

module.exports = {
    validateParams,
    deleteTask,
    createTask,
    getAllTasks,
    renderTask,
    renderCreateTask
}