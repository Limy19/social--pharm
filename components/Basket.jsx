const React = require('react');
const Layot = require('./Layot');

function Basket({ title, order }) {
  // console.log(order[0].OrderItems, '----');
  return (
    <Layot title={title}>
      <div className="zakaz">
        <h2>Ваш заказ:</h2>
        <div className="products">
          {order[0].OrderItems.map((orderItem) => (
            <p className="line">{orderItem.Drug.title}</p>
          ))}
        </div>
        <button className="pay">Оплатить</button>
      </div>
    </Layot>
  );
}
module.exports = Basket;
