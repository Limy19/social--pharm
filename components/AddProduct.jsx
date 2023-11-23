const React = require('react');

function AddProduct() {
  return (
    <form className='addProduct'>
      <input type="text" name="title" />
      <input type="text" name="url" />
      <input type="text" name="price" />
      <input type="text" name="count" />
      <input type="text" name="status" />
      <button type="submit">Добавить</button>
    </form>
  );
}
module.exports = AddProduct;
