const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <script defer src="/scripts/authScript.js" />
        {/* <script defer src="/scripts/productScript.js" /> */}
        <link rel="stylesheet" href="/style/index.css" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
