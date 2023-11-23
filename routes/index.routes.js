const router = require('express').Router();
const mainViewRout = require('./view/main.routes');
const authViewRout = require('./view/auth.routes');
const authApiRout = require('./api/authApi.routes');

router.use('/', mainViewRout);
router.use('/auth', authViewRout);

router.use('/api/auth', authApiRout);

module.exports = router;
