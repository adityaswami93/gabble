const express = require("express");
const loginRouter = express.Router();
const models = require("../models");

loginRouter.get("/", function(req, res) {
  res.render("login");
});

loginRouter.post("/", async function(req, res) {
  // if (!req.body || !req.body.username || !req.body.password) {
  //   return res.redirect("login");
  // }

  var requestingUser = req.body;
  var userRecord;

  const username = req.body.username;
  const password = req.body.password;
  // const statement =
  //   "SELECT * FROM USERS where username = " +
  //   `\"${username}\"` +
  //   " AND password = " +
  //   `\"${password}\"`;

  const statement = "SELECT * FROM USERS where username = ? AND password = ?";

  const [results, metadata] = await models.sequelize.query(statement, {
    raw: true,
    replacements: [username, password]
  });
  console.log(results.length);

  if (results.length > 0) {
    req.session.user = {
      username: results[0].username,
      displayName: results[0].displayName,
      userId: results[0].id
    };
    res.redirect("/");
  } else {
    res.redirect("login");
  }
});

// https://sequelize.org/master/manual/raw-queries.html

module.exports = loginRouter;
