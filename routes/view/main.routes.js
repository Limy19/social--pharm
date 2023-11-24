const router = require('express').Router();

const Main = require('../../components/Main');

const { Drug } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Drug.findAll();
    const html = res.renderComponent(Main, {
      title: 'Social-Pharmacy',
      products,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

module.exports = router;
