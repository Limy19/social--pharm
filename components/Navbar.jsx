/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
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
