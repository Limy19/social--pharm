const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <img src="" />
      <a href="/auth/registration">Регистрация</a>
      <a href="/auth/logo">Авторизация</a>
      {user && <a>Выйти</a>}
    </nav>
  );
}
module.exports = Navbar;
