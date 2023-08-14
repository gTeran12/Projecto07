const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('package', {
    idpackage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'package',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpackage" },
        ]
      },
      {
        name: "idpackage_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpackage" },
        ]
      },
    ]
  });
};
