/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
const React = require('react');

function Navbar({ user }) {
  return (
    <nav className="navigationBar">
      <ul>
        <li>
          <a href="default.asp">Главная</a>
        </li>
        <li>
          <a href="/auth/registration">Регистрация</a>
        </li>
        <li>
          <a href="/auth/logo">Авторизация</a>
        </li>
        <li>
          <a href="/basket">Корзина</a>
        </li>
        <li>{user && <a>Выйти</a>}</li>
      </ul>
    </nav>
  );
}
module.exports = Navbar;
