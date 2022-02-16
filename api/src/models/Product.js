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
      allowNull: false
    },
    cost_by_unit:{
      type:DataTypes.FLOAT,
      allowNull: false
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false
    },
    // expiration_date:{
    //   type:DataTypes.DATE,
    // },
    warranty:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    brand:{
      type:DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER
    }
    // country:{
    //     type:DataTypes.STRING,
    //   }
  },
  {
    timestamps: false,
  });
};
