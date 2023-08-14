const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_package', {
    package_idpackage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'package',
        key: 'idpackage'
      }
    },
    user_iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'iduser'
      }
    }
  }, {
    sequelize,
    tableName: 'user_package',
    timestamps: false,
    indexes: [
      {
        name: "fk_user_package_package_idx",
        using: "BTREE",
        fields: [
          { name: "package_idpackage" },
        ]
      },
      {
        name: "fk_user_package_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_iduser" },
        ]
      },
    ]
  });
};
