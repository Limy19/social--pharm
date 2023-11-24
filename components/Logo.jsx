/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layot = require('./Layot');

function Logo({ title }) {
  return (
    <Layot title={title}>
      <form className="userLogo">
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
          type="password"
          required
        />
        <button className="formButtonchik" type="submit">
          Войти
        </button>
      </form>
      <div className="errLogo"></div>
    </Layot>
  );
}
module.exports = Logo;
