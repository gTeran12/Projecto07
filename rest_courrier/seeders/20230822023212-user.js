'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('user',[
    {
      iduser: 1,
      usermail: "gteran@espol.edu.ec",
      password: "123456"
    },
    {
      iduser: 2,
      usermail: "dafebust@espol.edu.ec",
      password: "654321"
    },
    {
      iduser: 3,
      usermail: "ntubay@espol.edu.ec",
      password: "password"
    }
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, {});
  }
};
