'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,


      },
      name: { 
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "vazio"
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        defaultValue: "vazio"

      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "vazio"

      },
      create_at: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW

      },
      updated_at: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue:Sequelize.NOW

      }
    });

  },

  down: (queryInterface) => {

    return queryInterface.dropTable('users');

  }
};
