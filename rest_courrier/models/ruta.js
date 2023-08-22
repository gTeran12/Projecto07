const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ruta', {
    idruta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origen: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    destino: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fechaEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ruta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idruta" },
        ]
      },
    ]
  });
};
