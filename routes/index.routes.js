const router = require('express').Router();
const mainViewRout = require('./view/main.routes');

router.use('/', mainViewRout);
module.exports = router;
