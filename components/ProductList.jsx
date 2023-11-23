const React = require('react');
const ProducCard = require('./ProductCard');
const FreeDrugsBanner = require('./FreeDrugsBanner');

function ProductList({ products }) {
  return (
    <div>
      <div className="freeDrugsBanner">
        <p>Бесплатный товар недели:</p>
        {products.map((product) => (
          <FreeDrugsBanner product={product} />
        ))}
        <button type="submit" className="FreeOrder">
          Заказать бесплатно!
        </button>
      </div>
      <div className="card">
        {products.map((product) => (
          <ProducCard product={product} />
        ))}
      </div>
    </div>
  );
}

module.exports = ProductList;
