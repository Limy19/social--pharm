/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { Drug } = require('../../db/models');
const productList = require('../../components/ProductList');

router.get('/', async (req, res) => {
  try {
    await Drug.update({ status: false }, { where: { status: true } });
    const products = await Drug.findAll({
      raw: true,
      order: [['price', 'ASC']],
    });

    for (let i = 1; i < 3; i++) {
      const a = products[Math.floor(Math.random() * products.length)];
      // console.log('>>>>>>>>>>', a);
      await Drug.update({ status: true }, { where: { id: a.id } });
      a.status = true;
    }
    // console.log(products, '<<<<<<<<');

    const html = res.renderComponent(productList, {
      title: 'Social-Pharmacy',
      products,
    });

    res.json(html);
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

module.exports = router;
