const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      order_date: {
        type: DataTypes.DATE,
      },
      // delivery_date: {
      //   type: DataTypes.DATE,
      // },
      total_amount: {
        type: DataTypes.FLOAT,
      },
      status: {
        type: DataTypes.ENUM("approved", "process", "rejected", "delivered"),
      },
      disabled: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
