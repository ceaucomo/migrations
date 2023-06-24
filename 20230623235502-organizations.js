'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('businesses', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      businessName: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      publicBusinessName: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      taxId: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      fiscalAddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      contactPhone: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      contactEmail: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      idSubscription: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'subscriptions',
          key: 'id',
        },
      },
      idGlobalParameters: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'global_parameters',
          key: 'id',
        },
      },
      releaseYear: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      businessDescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      businessHistoryDescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      logo: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'logos',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('businesses');
  },
};
