const Sequelize = require("sequelize");

const sequelize = new Sequelize("studentresults", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
});

module.exports = sequelize;

// global var sequelize , so no need to import it everywhere
global.sequelize = sequelize;
