/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layot = require('./Layot');

function Rega({ title }) {
  return (
    <Layot title={title}>
      <form className="userRega">
        <input className="inputForm" name="name" placeholder="name" required />
        <input
          className="inputForm"
          name="email"
          placeholder="email"
          required
        />
        <input
          className="inputForm"
          name="password"
          placeholder="password"
          required
          type="password"
        />
        <button className="formButtonchik" type="submit">
          Регистрация
        </button>
        <a href="/auth/logo"> У меня уже есть аккаунт</a>
      </form>

      <div className="errRega"></div>
    </Layot>
  );
}
module.exports = Rega;
