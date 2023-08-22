var DataTypes = require("sequelize").DataTypes;
var _mensajero = require("./mensajero");
var _mensajero_has_ruta = require("./mensajero_has_ruta");
var _package = require("./package");
var _ruta = require("./ruta");
var _user = require("./user");
var _user_package = require("./user_package");

function initModels(sequelize) {
  var mensajero = _mensajero(sequelize, DataTypes);
  var mensajero_has_ruta = _mensajero_has_ruta(sequelize, DataTypes);
  var package = _package(sequelize, DataTypes);
  var ruta = _ruta(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_package = _user_package(sequelize, DataTypes);

  mensajero.belongsToMany(ruta, { as: 'ruta_idruta_ruta', through: mensajero_has_ruta, foreignKey: "mensajero_idmensajero", otherKey: "ruta_idruta" });
  ruta.belongsToMany(mensajero, { as: 'mensajero_idmensajero_mensajeros', through: mensajero_has_ruta, foreignKey: "ruta_idruta", otherKey: "mensajero_idmensajero" });
  mensajero_has_ruta.belongsTo(mensajero, { as: "mensajero_idmensajero_mensajero", foreignKey: "mensajero_idmensajero"});
  mensajero.hasMany(mensajero_has_ruta, { as: "mensajero_has_ruta", foreignKey: "mensajero_idmensajero"});
  user_package.belongsTo(package, { as: "package_idpackage_package", foreignKey: "package_idpackage"});
  package.hasMany(user_package, { as: "user_packages", foreignKey: "package_idpackage"});
  mensajero_has_ruta.belongsTo(ruta, { as: "ruta_idruta_rutum", foreignKey: "ruta_idruta"});
  ruta.hasMany(mensajero_has_ruta, { as: "mensajero_has_ruta", foreignKey: "ruta_idruta"});
  user_package.belongsTo(user, { as: "user_iduser_user", foreignKey: "user_iduser"});
  user.hasMany(user_package, { as: "user_packages", foreignKey: "user_iduser"});

  return {
    mensajero,
    mensajero_has_ruta,
    package,
    ruta,
    user,
    user_package,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
