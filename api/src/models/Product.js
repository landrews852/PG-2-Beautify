const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "product",
    {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          let name = value.toLowerCase();
          this.setDataValue("product_name", name);
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cost_by_unit: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      warranty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          let name = value.toLowerCase();
          this.setDataValue("brand", name);
        },
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      disabled: {
        type: DataTypes.STRING,
        defaultValue: false,
      },

      total: {
        type: DataTypes.VIRTUAL,
        get() {
          let price =
            this.cost_by_unit - (this.cost_by_unit * this.discount) / 100;
          return parseFloat(price.toFixed(2));
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
