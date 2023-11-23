const React = require('react');

function ProductCard({ product }) {
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
            <a href={`/product/${product.id}/update`}>
              <button type="submit">Изменить</button>
            </a>
          </p>
        </>
      ) : (
        <>
          <p className="price">{`Цена: ${product.price} `}</p>
          <p>{`В наличии: ${product.count}`}</p>
          <p>
            <a href={`/product/${product.id}/update`}>
              <button type="submit">Изменить</button>
            </a>
          </p>
        </>
      )}
    </div>
  );
}

module.exports = ProductCard;
