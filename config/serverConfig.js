const express = require('express');

const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const ssr = require('../middleware/ssr'); // подключение миддлварки
const { verifyAccessToken } = require('../middleware/verifyTokens');

const config = (app) => {
  app.use(express.json()); // читать JSON-данные из тела запросов
  app.use(express.urlencoded({ extended: true })); // читать данные из тела запросов
  app.use(express.static('public')); // Если после указания статики положить в папку public какие- нибудь файлы, то они будут доступны браузеру (Express создаст маршрутизацию для каждого файла самостоятельно).
  app.use(ssr); // использование мидделварки
  app.use(cookieParser());
  app.use(verifyAccessToken);
  app.use(morgan('dev'));
};
module.exports = config;
