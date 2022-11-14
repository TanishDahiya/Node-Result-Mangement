const Results = require("../models/Result");

module.exports.login = async function (req, res) {
  const user = req.query.user;
  const errHandler = (err) => {
    console.error("Error :", err);
  };

  if (user == "teacher") {
    return res.redirect("/results");
  } else if (user == "student") {
    return res.render("findResult");
  }
};

module.exports.logout = function (req, res) {
  return res.render("login");
};

module.exports.add = async function (req, res) {
  return res.render("addResult");
};
