'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(User) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Order.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      status: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      sumZakaza: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
