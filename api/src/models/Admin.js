const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('admin', {
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_picture: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    telephone: {
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
    })
}