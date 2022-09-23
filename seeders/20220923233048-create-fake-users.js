'use strict';

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
      await queryInterface.bulkInsert('users', [{
          name: 'John Doe',
          email: 'johnd@email.com',
          role: "user",
          uuid: "f8a5e0e4-67cc-4080-b54d-45a04b2c29a1",
          createdAt: "2022-09-23T23:34:01.620Z",
          updatedAt: "2022-09-23T23:34:01.620Z",
        }, {
        name: 'Jane Doe',
        email: 'janed@email.com',
        role: "user",
        uuid: "f8a5e0e4-67cc-4080-b54d-60a04b2c29a1",
        createdAt: "2022-10-23T23:34:01.620Z",
        updatedAt: "2022-10-23T23:34:01.620Z",
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
