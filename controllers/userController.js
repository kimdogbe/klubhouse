const db = require("../db/queries");
const bcrypt = require("bcryptjs");

async function addUserToDB(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await db.addNewUser(req.body, hashedPassword);
    console.log("User successfully added: ");
    console.log(result);
    res.redirect('/login');
  } catch (error) {
    console.log(error);
    res.send('Error');
  }
}

module.exports = {
  addUserToDB
}