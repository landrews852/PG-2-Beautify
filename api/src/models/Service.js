const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('service', {
    name_service: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull: false
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    disabled: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
  });
};