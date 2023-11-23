'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Drugs',
      [
        {
          title: 'узбагаин',
          url: '/img/узбагоин.jpg',
          price: 139,
          count: 2,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'антибубнин',
          url: '/img/антибубнин.jpg',
          price: 100,
          count: 3,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'антитупин',
          url: '/img/антитупин.jpg',
          price: 220,
          count: 2,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'пендальгин.',
          url: '/img/пендальгин..png',
          price: 156,
          count: 1,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'пофигин',
          url: '/img/пофигин.jpeg',
          price: 243,
          count: 5,
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
