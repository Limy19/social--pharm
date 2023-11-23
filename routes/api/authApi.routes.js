const router = require('express').Router();
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      await User.create({
        name,
        email,
        password: bcrypt.hash(password, 10),
        isAdmin: false,
      });
    }
  } catch ({ message }) {
    res.status(500).end();
  }
});
module.exports = router;
