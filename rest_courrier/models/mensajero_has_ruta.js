const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mensajero_has_ruta', {
    mensajero_idmensajero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mensajero',
        key: 'idmensajero'
      }
    },
    ruta_idruta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ruta',
        key: 'idruta'
      }
    }
  }, {
    sequelize,
    tableName: 'mensajero_has_ruta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mensajero_idmensajero" },
          { name: "ruta_idruta" },
        ]
      },
      {
        name: "fk_mensajero_has_ruta_ruta1_idx",
        using: "BTREE",
        fields: [
          { name: "ruta_idruta" },
        ]
      },
      {
        name: "fk_mensajero_has_ruta_mensajero1_idx",
        using: "BTREE",
        fields: [
          { name: "mensajero_idmensajero" },
        ]
      },
    ]
  });
};
