var DataTypes = require("sequelize").DataTypes;
var _package = require("./package");
var _user = require("./user");
var _user_package = require("./user_package");

function initModels(sequelize) {
  var package = _package(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_package = _user_package(sequelize, DataTypes);

  user_package.belongsTo(package, { as: "package_idpackage_package", foreignKey: "package_idpackage"});
  package.hasMany(user_package, { as: "user_packages", foreignKey: "package_idpackage"});
  user_package.belongsTo(user, { as: "user_iduser_user", foreignKey: "user_iduser"});
  user.hasMany(user_package, { as: "user_packages", foreignKey: "user_iduser"});

  return {
    package,
    user,
    user_package,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
