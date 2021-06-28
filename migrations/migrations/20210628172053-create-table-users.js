'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      }
    }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
