// Здесь должна быть функция которая генерирует (подписывает) токены:
// Пример применений метода .sign() из пакета jwt:
// jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: jwtConfig.access.expiresIn })

const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const generateTokens = (nachinka) => ({
  aToken: jwt.sign(nachinka, 'secretA', {
    expiresIn: jwtConfig.access.expiresIn,
  }),
  rToken: jwt.sign(nachinka, 'secretR', {
    expiresIn: jwtConfig.refresh.expiresIn,
  }),
});

module.exports = { generateTokens };
