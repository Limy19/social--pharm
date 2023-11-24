const React = require('react');

function AddProduct() {
  return (
    <form className="addProduct">
      <input type="text" name="title" placeholder="title" />
      <input name="url" placeholder="url" type="file" />
      <input type="text" name="price" placeholder="price" />
      <input type="text" name="count" placeholder="count" />
      <input type="text" name="status" placeholder="status" />

      <button type="submit">Добавить</button>
    </form>
  );
}
module.exports = AddProduct;
