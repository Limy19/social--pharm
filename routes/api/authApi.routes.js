const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const findUser = await User.findOne({ where: { email } });
    console.log(findUser);
    if (!findUser) {
      // const hush = await bcrypt.hash(password, 10);
      await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        isAdmin: false,
      });
      res.json({ registration: true, url: '/auth/logo' });
    } else {
      res.json({ message: 'Email alrady exist!' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

router.post('/logo', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        res.json({ logo: true, url: '/' });
      } else {
        res.json({ message: 'Неправильный пароль или логин' });
      }
    } else {
      res.json({ message: 'Пользователь с такой почтой не зарегистрирован' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});
module.exports = router;
