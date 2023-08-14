const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    iduser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usermail: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "usermail_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iduser" },
        ]
      },
      {
        name: "iduser_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iduser" },
        ]
      },
      {
        name: "usermail_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usermail" },
        ]
      },
    ]
  });
};
