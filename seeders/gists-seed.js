  
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Gist',
[
          {
            fileName: 'MyFirstProgram.php',
            description: 'Hello world',
            content: '<?php \n echo "Hello world!";\n ?>',
            secret: false,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          },        
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Gist', null, {});
  }
};