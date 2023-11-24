const router = require('express').Router();
const mainViewRout = require('./view/main.routes');
const authViewRout = require('./view/auth.routes');
const authApiRout = require('./api/authApi.routes');
const productApiRout = require('./api/productApi.routes');
const editProductRout = require('./view/editProduct.routes');

const basketRout = require('./view/basket.routes');

const weklyProductUpdateRoute = require('./api/weklyProductUpdate.routes');


router.use('/', mainViewRout);
router.use('/basket', basketRout);
router.use('/auth', authViewRout);
router.use('/product', editProductRout);

router.use('/api/auth', authApiRout);
router.use('/api/product', productApiRout);
router.use('/api/wekly', weklyProductUpdateRoute);

module.exports = router;
