'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Repos',
[
          {
            name: 'Sleep',
            description: 'Go Sleep',
            userEmail: 'test@test.com',
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          },        
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Repos', null, {});
  }
};
