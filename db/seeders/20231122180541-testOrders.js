/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          userId: 1,
          status: 'готов к выдаче',
          sumZakaza: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          sumZakaza: 200,
          status: 'заказ собирается',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
