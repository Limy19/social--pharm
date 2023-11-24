const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <script defer src="/scripts/productScript.js" />
        <script defer src="/scripts/authScript.js" />
        <script defer src="/scripts/weeklyProductScript.js" />
        <script defer src="/scripts/basketScript.js" />
        <link rel="stylesheet" href="/style/index.css" />
      </head>
      <body>
        <div className="Main">
          <div className="good">
            <Navbar user={user} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};
