const React = require('react');
const ProducCard = require('./ProductCard');

function ProductList({ products }) {
  return (
    <div className="card">
      {products.map((product) => (
        <ProducCard product={product} />
      ))}
    </div>
  );
}

module.exports = ProductList;
