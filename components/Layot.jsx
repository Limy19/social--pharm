const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        {/* <script defer src="/scripts/productScript.js" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
};
