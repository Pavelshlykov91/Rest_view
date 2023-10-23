'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Иван',
      lastName: 'Иванов',
      password: '11111',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Петр',
      lastName: 'Петров',
      password: '22222',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
