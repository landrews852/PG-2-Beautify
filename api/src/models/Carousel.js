const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('carousel', {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      timestamps: false,
    })
}