const React = require('react');

function FreeDrugsBanner({ product }) {
  return product.status ? (
    <div className="freeDrugs">
      <div className="freedrugName">
        {' '}
        {product.title}
        {<img className="freebar" src={product.url} alt="" />}{' '}
      </div>
    </div>
  ) : (
    ' '
  );
}

module.exports = FreeDrugsBanner;
