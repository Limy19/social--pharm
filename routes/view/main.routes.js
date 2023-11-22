const router = require('express').Router();
const Main = require('../../components/Main');

router.get('/', (req, res) => {
  try {
    const html = res.renderComponent(Main, {
      title: 'Social-Pharmacy',
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).end();
  }
});
module.exports = router;
