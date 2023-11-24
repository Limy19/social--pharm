const router = require('express').Router();
const Nun = require('../../components/Nun');

router.get('/', (req, res) => {
  try {
    const html = res.renderComponent(Nun, {
      title: '404',
    });
    res.send(html);
  } catch ({ message }) {
    console.log(message);
    res.end();
  }
});
module.exports = router;
