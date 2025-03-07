const db = require("../db/queries");

async function showHomePage(req, res) {
  // const allMessages = await db.getAllMessages();
  // console.log(allMessages);
  res.render("index", { user: req.user });
}

function showLoginPage(req, res) {
  res.render("login", { user: req.user });
}

function showSignUpPage(req, res) {
  res.render("sign-up", { user: req.user });
}

module.exports = {
  showHomePage,
  showLoginPage,
  showSignUpPage
}