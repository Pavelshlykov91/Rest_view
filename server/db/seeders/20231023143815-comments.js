'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      user_id: 1,
      restaurant_id: 1,
      content: 'Потрясающий ресторан',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      restaurant_id: 1,
      content: 'Отличное место!',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {})
  }
}
