'use strict';

const createUpdate = require(".../models/createAndUpdate");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
        await queryInterface.createTable('colaboradores', { 
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          aluno_id: {
           type: Sequelize.INTEGER,
           allowNull: false
          },
    
          city: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
    
          neighborhood: {
            type: Sequelize.STRING(20),
            allowNull: false
          },
    
          uf: {
            type: Sequelize.CHAR(2),
            allowNull: false
          },
    
          complement: {
            type: Sequelize.STRING(255),
            allowNull: true
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
