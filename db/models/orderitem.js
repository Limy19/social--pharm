const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      this.belongsTo(models.Order, { foreignKey: 'orderId' });
      this.belongsTo(models.Drug, { foreignKey: 'drugId' });
    }
  }
  OrderItem.init(
    {
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      drugId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Drugs',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'OrderItem',
    }
  );
  return OrderItem;
};
