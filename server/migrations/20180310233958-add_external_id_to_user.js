'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'external_id', { type: Sequelize.INTEGER, allowNull: false })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'external_id')
  }
};
