/* eslint-disable no-nested-ternary */
const React = require('react');
const Layot = require('./Layot');
const ProductList = require('./ProductList');
const AddProduct = require('./AddProduct');

function Main({ title, products, user }) {
  return (
    <Layot title={title} user={user}>
      <AddProduct user={user} />
      {!user ? (
        ''
      ) : user.isAdmin ? (
        <button type="button" className="FreeOrder">
          Обновить список
        </button>
      ) : (
        ''
      )}

      <ProductList products={products} user={user} />
    </Layot>
  );
}

module.exports = Main;
