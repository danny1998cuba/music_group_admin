var express = require('express');
var router = express.Router();

const midds = require('../../middlewares').crudRoutes

const controller = require('../../controllers').activitiesController

/* GET wp listing. */
router.get('/', controller.findAll);
router.get('/:id', midds.idRequired, controller.findById);
router.post('/', controller.create);
router.put('/:id', midds.idRequired, controller.update);
router.delete('/all', controller.clear)
router.delete('/:id', midds.idRequired, controller.delete);

module.exports = router;
