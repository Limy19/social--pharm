const React = require('react');
const ProducCard = require('./ProductCard');
const FreeDrugsBanner = require('./FreeDrugsBanner');

function ProductList({ products, user }) {
  const productsJSON = JSON.stringify(products); // Преобразуем данные о товарах в JSON-строку

  return (
    <div className="gavno" data-products={productsJSON}>
      <div className="freeDrugsBanner">
        <p>Бесплатный товар недели:</p>
        {products.map((product) => (
          <FreeDrugsBanner product={product} />
        ))}
      </div>
      <div className="card">
        {products.map((product) => (
          <ProducCard product={product} user={user} />
        ))}
      </div>
    </div>
  );
}

module.exports = ProductList;
