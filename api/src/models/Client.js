const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "client",
    {
      id: {
        type: DataTypes.FLOAT,
        primaryKey: true,
        allowNull: false,
      },
      id_auth: {
        type: DataTypes.STRING,
      },
      name_client: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname_client: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_picture: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
      },
      birthday: {
        type: DataTypes.DATEONLY,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      disabled: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      // purchase_history: {
      //   type: DataTypes.INTEGER,
      // },
      // dating_history: {
      //   type: DataTypes.DATE,
      // },
    },
    {
      timestamps: false,
    }
  );
};
