const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "category",
    {
      name_category: {
        type: DataTypes.STRING,
        allowNull: false,
         set(value) {
           let name = value.toLowerCase();
          this.setDataValue("name_category", name);
         },
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
