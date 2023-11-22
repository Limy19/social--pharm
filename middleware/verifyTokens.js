// Набор промежуточных функций (middleware) для работы с верификацией access и refresh токенов
// Реализовать функции:
// verifyAccessToken — функция получает куку с access токеном, на основе метода .verify() проверяем валидность токена, тебуется сам токен и секретное слово. Если токен валиден получаем его payload (полезную нагрузку), в нашем случае это просто user. И наполняем res.locals.user. В случае ошибки (не прошли верификацию) запускаем функцию verifyRefreshToken.
// verifyRefreshToken — функция получает куку с refresh токеном,на основе метода .verify() проверяем валидность токена, тебуется сам токен и секретное слово. Если токен валиден получаем его payload (полезную нагрузку), в нашем случае это просто user и используем его для формирования новой пары токенов + наполняем res.locals.user. Новую пару токенов отправляем на клиент через httpOnly куки. В случае ошибки удаляем все куки и используем next()

const jwt = require('jsonwebtoken');
const cookiesConfig = require('../config/cookiesConfig');
const { generateTokens } = require('../utils/authUtils');

const verifyRefreshToken = (req, res, next) => {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, 'secretR');
    res.locals.user = user;
    const { aToken, rToken } = generateTokens({ user });
    res
      .cookie(cookiesConfig.access, aToken, {
        maxAge: cookiesConfig.maxAgeAccess,
        httpOnly: cookiesConfig.httpOnly,
      })
      .cookie(cookiesConfig.refresh, rToken, {
        maxAge: cookiesConfig.maxAgeRefresh,
        httpOnly: cookiesConfig.httpOnly,
      });

    next();
  } catch (error) {
    res.clearCookie(cookiesConfig.access).clearCookie(cookiesConfig.refresh);
    next();
  }
};
const verifyAccessToken = (req, res, next) => {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, 'secretA');
    res.locals.user = user;
    // console.log(user);
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
};

module.exports = { verifyAccessToken };
