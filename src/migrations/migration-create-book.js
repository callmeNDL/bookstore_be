'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      /*  masach: DataTypes.STRING,
        tensach: DataTypes.STRING,
        mota: DataTypes.STRING,
        gia: DataTypes.INTEGER,
        hinh: DataTypes.STRING,
        manxb: DataTypes.STRING
    */

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      masach: {
        type: Sequelize.STRING
      },
      tensach: {
        type: Sequelize.STRING
      },
      mota: {
        type: Sequelize.STRING
      },
      gia: {
        type: Sequelize.INTEGER
      },
      hinh: {
        type: Sequelize.STRING
      },
      manxb: {
        type: Sequelize.STRING
      },
      maloai: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};