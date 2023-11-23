const React = require('react');
const Layot = require('./Layot');
const Navbar = require('./Navbar');

function Main({ title }) {
  return (
    <Layot title={title}>
      <Navbar />
      
    </Layot>
  );
}

module.exports = Main;
