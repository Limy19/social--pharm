require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes'); // подключение роутуров

const app = express();
config(app);

app.use('/', indexRouter); // испоользовать роутеры

app.listen(3000, () => {
  console.log('Пупупуп');
});
