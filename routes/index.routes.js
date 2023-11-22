const router = require('express').Router();
const mainViewRout = require('./view/main.routes');
const authViewRout = require('./view/auth.routes');

router.use('/', mainViewRout);
router.use('/auth', authViewRout);

module.exports = router;
