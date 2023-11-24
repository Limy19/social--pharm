const React = require('react');

function ProductCard({ product, user }) {
  console.log(user);
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
        </>
      ) : (
        <>
          <p className="price">{`Цена: ${product.price} `}</p>
          <p>{`В наличии: ${product.count}`}</p>
        </>
      )}
      {!user ? (
        <p>
          <a href={`/product/${product.id}/update`}>
            <button type="submit">ГОСТЬ</button>
          </a>
        </p>
      ) : (
        <p>
          {user.name}
          <a href={`/product/${product.id}/update`}>
            <button type="submit">{user.isAdmin ? 'АДМИН' : 'ЮЗЕР'}</button>
          </a>
        </p>
      )}
    </div>
  );
}

module.exports = ProductCard;
