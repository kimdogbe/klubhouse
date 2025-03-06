const db = require("../db/queries");

async function showHomePage(req, res) {
  const allMessages = await db.getAllMessages();
  console.log(allMessages);
  res.render("index");
}

function showLoginPage(req, res) {
  res.send("login");
}

function showSignUpPage(req, res) {
  res.render("sign-up");
}