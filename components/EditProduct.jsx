const React = require('react');
const Layot = require('./Layot');

function EditProduct({ title, idProduct }) {
  return (
    <Layot title={title}>
      <form className="editProduct">
        <input type="text" name="title" value={idProduct.title} />
        <input type="text" name="url" value={idProduct.url} />
        <input type="text" name="price" value={idProduct.price} />
        <input type="text" name="count" value={idProduct.count} />
        <input type="text" name="status" value={idProduct.status} />
        <button type="submit">Сохранить</button>
      </form>
      <div className="errorEditProduct"></div>
    </Layot>
  );
}
module.exports = EditProduct;
