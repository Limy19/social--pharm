const React = require('react');
const Layot = require('./Layot');

function Rega({ title }) {
  return (
    <Layot title={title}>
      <form className="userRega">
        <input name="name" placeholder="name" required />
        <input name="email" placeholder="email" required />
        <input name="password" placeholder="password" required />
        <button type="submit">Регистрация</button>
      </form>
    </Layot>
  );
}
module.exports = Rega;
