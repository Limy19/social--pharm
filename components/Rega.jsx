/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layot = require('./Layot');

function Rega({ title }) {
  return (
    <Layot title={title}>
      <form className="userRega">
        <input name="name" placeholder="name" required />
        <input name="email" placeholder="email" required />
        <input
          name="password"
          placeholder="password"
          required
          type="password"
        />
        <button type="submit">Регистрация</button>
      </form>
      <div className="errRega"></div>
    </Layot>
  );
}
module.exports = Rega;
