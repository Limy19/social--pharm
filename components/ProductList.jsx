const React = require('react');

function ProductList({ products }) {
  return (
    <div className="card">
      {products.map((product) => (
        <>
          <p>{product.title}</p>
          <img className="cardImage" src={product.url} alt="BibaBoba" />
          <p>{product.price}</p>
          <p>{product.count}</p>
          <p>{product.count}</p>
        </>
      ))}
    </div>
  );
}

module.exports = ProductList;
