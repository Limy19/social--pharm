/* eslint-disable no-console */
const router = require('express').Router();
const { Op } = require('sequelize');

const Main = require('../../components/Main');

const { Drug } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Drug.findAll({
      where: { count: { [Op.gt]: 0 } },
      order: [
        ['count', 'ASC'],
      ],
    });
    const html = res.renderComponent(Main, {
      title: 'Social-Pharmacy',
      products,
      user: res.locals.user,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

module.exports = router;
