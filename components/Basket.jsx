const React = require('react');
const Layot = require('./Layot');

function Basket({ title, order }) {
  return (
    <Layot title={title}>
      <div>
        {order[0].OrderItems.map((orderItem) => (
          <p>{orderItem.Drug.title}</p>
        ))}
      </div>
    </Layot>
  );
}
module.exports = Basket;
