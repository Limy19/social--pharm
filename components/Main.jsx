const React = require('react');
const Layot = require('./Layot');
const ProductList = require('./ProductList');
const AddProduct = require('./AddProduct');

function Main({ title, products }) {
  return (
    <Layot title={title}>
      <AddProduct />

      <ProductList products={products} />

      <button type="button" className="FreeOrder">
        Заказать бесплатно!
      </button>
    </Layot>
  );
}

module.exports = Main;
