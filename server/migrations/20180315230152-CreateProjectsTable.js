'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT('medium')
      }
    }).then(() => {

      queryInterface.createTable('user_project_map', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' }
        },
        project_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'projects', key: 'id' }
        }
      })

    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_project_map').then(() => {
      queryInterface.dropTable('projects')
    })
  }
};
