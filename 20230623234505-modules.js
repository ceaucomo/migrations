'use strict';
'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('modules', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      placeholder: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      componentKey: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('modules');
  },
};