const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock:{
      type:DataTypes.INTEGER,
    },
    cost_by_unit:{
      type:DataTypes.INTEGER
    },
    description:{
      type:DataTypes.STRING
    },
    category:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    expiration_date:{
      type:DataTypes.DATE
    },
    warranty:{
        type:DataTypes.INTEGER
    },
    brand:{
      type:DataTypes.STRING
    },
    image:{
      type:DataTypes.STRING,
    },
    country:{
        type:DataTypes.STRING,
      }
  });
};
