const router = require('express').Router();
const Basket = require('../../components/Basket');
const { Order, OrderItem, Drug } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    if (res.locals.user) {
      const order = await Order.findAll({
        where: { status: 'не оплачен', userId: res.locals.user.id },
        include: { model: OrderItem, include: { model: Drug } },
      });
      if (order[0]) {
        const html = res.renderComponent(Basket, {
          title: 'Basket',
          order,
        });
        res.send(html);
      }
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

module.exports = router;
