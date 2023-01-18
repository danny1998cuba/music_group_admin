var express = require('express');
var router = express.Router();

const activitiesRouter = require('./activity.routes')
const clothesRouter = require('./clothes.routes')
const gainsRouter = require('./gains.routes')
const memberRouter = require('./member.routes')
const songsRouter = require('./song.routes')
const usersRouter = require('./users.routes')
const wpRouter = require('./wp.routes')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Music Group Admin API v.1' });
});

router.use('/activity', activitiesRouter);
router.use('/clothes', clothesRouter);
router.use('/gains', gainsRouter);
router.use('/member', memberRouter);
router.use('/song', songsRouter);
router.use('/users', usersRouter);
router.use('/wp', wpRouter);


module.exports = router;
