const React = require('react');
const Layot = require('./Layot');
const ProductList = require('./ProductList');

function Main({ title, products }) {
  return (
    <Layot title={title}>
      <ProductList products={products} />
    </Layot>
  );
}

module.exports = Main;
