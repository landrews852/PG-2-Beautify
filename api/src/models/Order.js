const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      id_order: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_date: {
        type: DataTypes.DATE,
      },
      delivery_date: {
        type: DataTypes.DATE,
      },
      total_amount: {
        type: DataTypes.BOOLEAN,
      },
      discount: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM("paid", "process", "rejected", "delivered"),
      },
    },
    {
      timestamps: false,
    }
  );
};
