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

router.put('/:id/update', async (req, res) => {
  try {
    const { title, url, price, count, status } = req.body;
    const { id } = req.params;
    if (title && url && price && count && status) {
      const product = await Drug.update(
        { title, url, price, count, status },
        { where: { id } }
      );
      if (product[0] > 0) {
        res.json({ update: true });
      } else {
        res.json({ message: 'вы ничего не изменили' });
      }
      // console.log(product, '-------');
    } else {
      res.json({ message: 'заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).end();
  }
});

router.delete('/:id/delete', async (req, res) => {
  try {
    const { id } = req.params;
    const delCard = await Drug.destroy({ where: { id } });
    if (delCard) {
      res.json({ delete: true });
    } else {
      res.json({ message: 'Ошибка удаления' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

module.exports = router;
