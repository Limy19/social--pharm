const React = require('react');

function ProducCard({ product }) {
  return (
    <div className="cardItem">
      <p>{product.title}</p>
      <img className="cardImage" src={product.url} alt="BibaBoba" />
      <p>{product.price}</p>
      <p>{product.count}</p>
      <p>{product.count}</p>
      <a href={`/product/${product.id}/update`}>
        <button type="submit">Изменить</button>
      </a>
    </div>
  );
}

module.exports = ProducCard;
