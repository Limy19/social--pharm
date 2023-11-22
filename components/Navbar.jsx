const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <img src="" />
      <a>Регистрация</a>
      <a>Авторизация</a>
      {user && <a>Выйти</a>}
    </nav>
  );
}
module.exports = Navbar;
