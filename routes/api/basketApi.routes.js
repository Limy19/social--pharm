const router = require('express').Router();
const { Order, OrderItem, Drug } = require('../../db/models');

router.post('/', async (req, res) => {
  const { id } = req.body;
  //   console.log(req.body, '-------');
  const drug = await Drug.findOne({ where: { id } });
  let order;
  if (res.locals.user) {
    order = await Order.findOne({
      where: { status: 'не оплачен', userId: res.locals.user.id },
    });
  } else {
    order = await Order.create({
      userId: res.locals.user.id,
      status: 'не оплачено',
      sumZakaza: 0,
    });
  }

  const item = await OrderItem.findOne({
    where: { drugId: id, orderId: order.id },
  });
  //   console.log(drug);
  if (item) {
    item.count += 1;
    order.sumZakaza += drug.price;
    item.save();
    order.save();
  } else {
    await OrderItem.create({
      drugId: id,
      orderId: order.id,
      count: 1,
    });
  }
  res.json({});
});

module.exports = router;
