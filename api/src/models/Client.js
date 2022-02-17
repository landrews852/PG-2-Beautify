const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "client",
    {
      client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name_client: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname_client: {
        type: DataTypes.STRING,
      },
      profile_picture: {
        type: DataTypes.STRING,
      },
      password_client: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      birthday: {
        type: DataTypes.DATE,
      },
      purchase_history: {
        type: DataTypes.INTEGER,
      },
      dating_history: {
        type: DataTypes.DATE,
      },
      payment_detail: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
    }
  );
};