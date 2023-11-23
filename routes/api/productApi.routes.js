const router = require('express').Router();
const ProductCard = require('../../components/ProductCard');
const { Drug } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { title, url, price, count, status } = req.body;
    if (title && url && price && count && status) {
      const product = await Drug.create({ title, url, price, count, status });
      const html = res.renderComponent(
        ProductCard,
        { product },
        { doctype: false }
      );
      res.json({ html });
    } else {
      res.json({ append: false });
    }
  } catch ({ message }) {
    res.status(500).end();
  }
});

module.exports = router;
