'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Restaurants', [{
      name: 'Мансарда',
      address: 'Почтамтская ул., 3',
      telephone: '8 (812) 640-16-16',
      content: 'Самый лучший видовой ресторан СПб',
      url: 'https://lh3.googleusercontent.com/p/AF1QipNToZoLeT4448AAJzlo4SXlbuDb39fctKb9Ht6x=s680-w680-h510',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Il Lago',
      address: 'Крестовский пр., 21, лит. Б, Санкт-Петербург, 197110',
      telephone: '8 (812) 602-07-07',
      content: 'Престижный ресторан СПб',
      url: 'https://lh3.googleusercontent.com/p/AF1QipOx1Umu6JY9ZFMzH1C19g0_KNk8IxTXrKFMO10a=s680-w680-h510',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Restaurants', null, {})
  }
}
