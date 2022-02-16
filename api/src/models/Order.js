const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      order_date: {
        type: DataTypes.DATE,
      },
      // id_client: {
      //   type: DataTypes.INTEGER,
      // },
      delivery_date: {
        type: DataTypes.DATE,
      },
      total_amount: {
        type: DataTypes.FLOAT,
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
