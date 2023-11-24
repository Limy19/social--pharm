const router = require('express').Router();
const fileuploadMiddeleware = require('../../utils/fileuploadMiddeleware');

const EditProduct = require('../../components/EditProduct');
const { Drug } = require('../../db/models');

router.get('/:id/update', async (req, res) => {
  try {
    const { id } = req.params;
    const idProduct = await Drug.findOne({ where: { id } });
    const html = res.renderComponent(EditProduct, {
      title: 'Update-Product-Card',
      idProduct,
    });
    res.send(html);
  } catch ({ message }) {
    res.status(500).end();
  }
});

module.exports = router;
//
// const file = req.files?.homesImg;
// const foto = await fileuploadMiddeleware(file);
// при записи в базу мы назначаем ключу url:foto
