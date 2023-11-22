const router = require('express').Router();
const Logo = require('../../components/Logo');
const Rega = require('../../components/Rega');

router.get('/registration', (req, res) => {
  try {
    const html = res.renderComponent(Rega, {
      title: 'registration',
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).end();
  }
});

router.get('/logo', (req, res) => {
  try {
    const html = res.renderComponent(Logo, {
      title: 'Logo',
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).end();
  }
});
module.exports = router;
