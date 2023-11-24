/* eslint-disable no-nested-ternary */
const React = require('react');

function AddProduct({ user }) {
  return !user ? (
    ''
  ) : user.isAdmin ? (
    <form className="addProduct">
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="url" placeholder="url" />
      <input type="text" name="price" placeholder="price" />
      <input type="text" name="count" placeholder="count" />
      <input type="text" name="status" placeholder="status" />

      <button type="submit">Добавить</button>
    </form>
  ) : (
    ''
  );
}
module.exports = AddProduct;
