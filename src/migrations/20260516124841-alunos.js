'use strict';

const createUpdate = require(".../models/createAndUpdate");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

        await queryInterface.createTable('colaboradores', { 
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          escola_id: {
           type: Sequelize.INTEGER,
           allowNull: false
          },
    
          name: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
    
          surname: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
    
          email: {
            type: Sequelize.STRING(50),
            allowNull: false
          },
    
          document: {
            type: Sequelize.STRING(50),
            allowNull: false
          },
    
          document_type: {
            type: Sequelize.STRING(10),
            allowNull: false
          },
    
          ...createUpdate,
        
        });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
