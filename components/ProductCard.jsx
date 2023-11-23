const React = require('react');

function ProducCard({ product }) {
  return (
    <div className="cardItem">
      <header className="cardHeader">
        <h2>{product.title}</h2>
      </header>
      <img className="cardImage" src={product.url} alt="BibaBoba" />
      {product.status ? (
        <>
          <p className="price">Цена: 0</p>
          <p>{`В наличии: ${product.count}`}</p>
          <p>
            <button type="submit"> Add to Cart </button>
          </p>
        </>
      ) : (
        <>
          <p className="price">{`Цена: ${product.price} `}</p>
          <p>{`В наличии: ${product.count}`}</p>
          <p>
            <button type="submit"> Add to Cart </button>
          </p>
        </>
      )}
    </div>
  );
}

module.exports = ProducCard;
