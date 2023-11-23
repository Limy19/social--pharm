/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { Drug } = require('../../db/models');
const productList = require('../../components/ProductList');

router.get('/', async (req, res) => {
  try {
    const product = await Drug.findAll({ raw: true });
    const products = product.map((el) => {
      el.status = false;
      return el;
    });
    let i = 1;
    while (i <= 3) {
      const a = products[Math.floor(Math.random() * products.length)];
      // console.log('>>>>>>>>>>', a);
      a.status = true;
      i += 1;
    }
    // console.log(products, '<<<<<<<<');
    const html = res.renderComponent(productList, {
      title: 'Social-Pharmacy',
      products,
    });

    res.json(html);
  } catch ({ message }) {
    res.status(500).end();
  }
});

module.exports = router;
