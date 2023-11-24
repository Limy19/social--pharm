
/* eslint-disable no-console */
const React = require('react');

function ProductCard({ product, user }) {
  console.log('>>>>>>>>>>>>>', user);
  return (
    <div className="cardItem">
      <header className="cardHeader">
        <h2 className="cardh2">{product.title}</h2>
      </header>
      <img className="cardImage" src={product.url} alt="BibaBoba" />

      {product.status ? (
        <>
          <p className="price">Цена: 0</p>
          <p className="price">{`В наличии: ${product.count}`}</p>
          {!user ? <p>Нужна рега</p> : ''}
        </>
      ) : (
        <>
          <p className="price">{`Цена: ${product.price} `}</p>
          <p className="price">{`В наличии: ${product.count}`}</p>
          {!user ? <p>Нужна рега</p> : ''}
        </>
      )}
      {!user ? (
        <p className="price">
          <a href="/auth/registration">
            <button type="submit">Нужна рега</button>
          </a>
        </p>
      ) : (
        <p className="price">
          {user.isAdmin ? (
            <a href={`/product/${product.id}/update`}>
              <button type="submit"> Изменить </button>
            </a>
          ) : (
            <a href={'/'}>
              <button type="submit"> Купить </button>
            </a>
          )}
        </p>
      )}
    </div>
  );
}

module.exports = ProductCard;
