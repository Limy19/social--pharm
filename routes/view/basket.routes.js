const router = require('express').Router();
const Basket = require('../../components/Basket');
const { Order, OrderItem, Drug } = require('../../db/models');

router.get('/', async (req, res) => {
  const order = await Order.findAll({
    where: { status: 'не оплачен' },
    include: { model: OrderItem, include: { model: Drug } },
  });
  const html = res.renderComponent(Basket, {
    title: 'Basket',
    order,
  });
  res.send(html);
});
module.exports = router;
