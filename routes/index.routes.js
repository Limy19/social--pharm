const router = require('express').Router();
const mainViewRout = require('./view/main.routes');
const authViewRout = require('./view/auth.routes');
const authApiRout = require('./api/authApi.routes');
const productApiRout = require('./api/productApi.routes');

router.use('/', mainViewRout);
router.use('/auth', authViewRout);

router.use('/api/auth', authApiRout);
router.use('/api', productApiRout);

module.exports = router;
