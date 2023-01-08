var express = require('express');
var router = express.Router();

const midds = require('../middlewares').crudRoutes

const controller = require('../controllers').gainsController

/* GET wp listing. */
router.get('/', controller.findAll);
router.get('/:id_gain', midds.idRequired, controller.findById);
router.post('/', controller.create);
router.put('/:id_gain', midds.idRequired, controller.update);
router.delete('/all', controller.clear)
router.delete('/:id_gain', midds.idRequired, controller.delete);

module.exports = router;
