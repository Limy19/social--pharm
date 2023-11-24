/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
const React = require('react');

function Navbar({ user }) {
  return (
    <nav className="navigationBar">
      <ul>
        <li>{user && <a>{`Привет, ${user.name}`}</a>}</li>
        <li>
          <a href="/">Главная</a>
        </li>
        {!user ? (
          <>
            <li>
              <a href="/auth/registration">Регистрация</a>
            </li>
            <li>
              <a href="/auth/logo">Авторизация</a>
            </li>
          </>
        ) : (
          ''
        )}
        <li>
          <a href="/auth/logo">Корзина</a>
        </li>
        <li>{user && <a>Выйти</a>}</li>
      </ul>
    </nav>
  );
}
module.exports = Navbar;
