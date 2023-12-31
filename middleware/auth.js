/* eslint-disable no-unused-vars */
// Набор промежуточных функций (middleware) для работы с авторизацией и условной маршрутизации
// Реализовать функции:
// ifAuthRedirect — функция для редиректа на указанный адерс в случае активной авторизации
// rejectIfNotAuthorized — функция для защиты маршрутов при отсутствии аторизации
//  checkUser — функция для получения актуального значения пользователя из БД
// (важно чтобы поля 'password', 'createdAt', 'updatedAt' не отправлялись на клиент)

const ifAuthRedirect = (url) => (req, res, next) => {
  next();
};

module.exports = { ifAuthRedirect };
