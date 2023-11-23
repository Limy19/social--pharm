const React = require('react');
const Layot = require('./Layot');

function Logo({ title }) {
  return (
    <Layot title={title}>
      <form className="userLogo">
        <input name="email" placeholder="email" required />
        <input name="password" placeholder="password" required />
        <button type="submit">Войти</button>
      </form>
      <div className="errLogo"></div>
    </Layot>
  );
}
module.exports = Logo;
