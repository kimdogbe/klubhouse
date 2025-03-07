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

function showCreateMessagePage(req, res) {
  if (req.isAuthenticated()){
    res.render("create-message", {user: req.user});
  } else {
    res.send("Login to write a message");
  }
}

module.exports = {
  showHomePage,
  showLoginPage,
  showSignUpPage,
  showCreateMessagePage
}