const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    static associate(models) {
      this.hasMany(models.OrderItem, { foreignKey: 'drugId' });
    }
  }
  Drug.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Drug',
    },
  );
  return Drug;
};
