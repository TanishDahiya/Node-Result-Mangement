const Results = require("../models/Result");
const errHandler = (err) => {
  console.error("Error :", err);
};

module.exports.findAll = async function (req, res) {
  const results = await Results.findAll({ raw: true }).catch(errHandler);

  return res.render("results", { results: results });
};

module.exports.findOne = async function (req, res) {
  const result = await Results.findOne({
    where: {
      name: req.body.name,
      roll_no: req.body.roll_no,
    },
  }).catch(errHandler);

  console.log(result);

  return res.render("displayResult", { result: result });
};

module.exports.add = async function (req, res) {
  await Results.create({
    roll_no: req.body.roll_no,
    name: req.body.name,
    date_of_birth: req.body.date_of_birth,
    score: req.body.score,
  }).catch(errHandler);

  return res.redirect("/results");
};

module.exports.getEdit = async function (req, res) {
  const result = await Results.findOne({
    where: {
      roll_no: req.query.roll_no,
    },
  }).catch(errHandler);

  return res.render("editResult", { result: result });
};

module.exports.postEdit = async function (req, res) {
  await Results.update(
    {
      name: req.body.name,
      date_of_birth: req.body.date_of_birth,
      score: req.body.score,
    },
    {
      where: {
        roll_no: req.query.roll_no,
      },
    }
  ).catch(errHandler);

  return res.redirect("/results");
};

module.exports.delete = async function (req, res) {
  await Results.destroy({ where: { roll_no: req.query.roll_no } }).catch(
    errHandler
  );
  return res.redirect("/results");
};
