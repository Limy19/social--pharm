const React = require('react');

function FreeDrugsBanner({ product }) {
  return product.status ? (
    <div className="freeDrugs">
      <div>
        {' '}
        {product.title}
        {' '}
      </div>
    </div>
  ) : (
    ' '
  );
}

module.exports = FreeDrugsBanner;
