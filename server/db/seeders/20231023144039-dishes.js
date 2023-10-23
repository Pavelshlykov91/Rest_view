'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dishes', [{
      restaurant_id: 1,
      name: 'Бефстроганов',
      url: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/b4/fa/f1/caption.jpg',
      cost: 1500,
      content: 'Мягкая говядина с пюре',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      restaurant_id: 1,
      name: 'Борщ>',
      url: 'https://img04.rl0.ru/afisha/o/www.afisha.ru/uploads/3686bb52dcae481587d5900075f0162d.jpg',
      cost: 1300,
      content: 'Настоящий домашний борщ',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dishes', null, {})
  }
}
