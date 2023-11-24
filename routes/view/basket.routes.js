const router = require('express').Router();
const Basket = require('../../components/Basket');
const { Order, OrderItem, Drug } = require('../../db/models');

router.get('/', async (req, res) => {
  //   console.log(res.locals.user);
  if (res.locals.user) {
    const order = await Order.findAll({
      where: { status: 'не оплачен', userId: res.locals.user.id },
      include: { model: OrderItem, include: { model: Drug } },
    });
    // console.log(order, '000000000');
    if (order[0]) {
      const drug = await Drug.findAll({
        include: {
          model: OrderItem,
          include: { model: Order },
        },
        raw: true,
      });
      console.log(drug);
      // if(drug){

      // }
    }

    const html = res.renderComponent(Basket, {
      title: 'Basket',
      order,
    });
    res.send(html);
  }
});
module.exports = router;
