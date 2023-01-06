var express = require('express');
var router = express.Router();

const controller = require('../controllers').wpController

/* GET wp listing. */
router.get('/', controller.findAll);
router.post('/', controller.create);

module.exports = router;
