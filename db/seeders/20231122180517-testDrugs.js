'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Drugs',
      [
        {
          title: 'узбагаин',
          url: 'public/img/узбагоин.jpg',
          price: 139,
          count: 0,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'антибубнин',
          url: 'public/img/антибубнин.jpg',
          price: 100,
          count: 0,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'антитупин',
          url: 'public/img/антитупин.jpg',
          price: 220,
          count: 0,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'пендальгин.',
          url: 'public/img/пендальгин..png',
          price: 156,
          count: 0,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'пофигин',
          url: 'public/img/пофигин.jpeg',
          price: 243,
          count: 0,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Drugs', null, {});
  },
};
