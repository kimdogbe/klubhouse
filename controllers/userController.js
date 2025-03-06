const db = require("../db/queries");
const bcrypt = require("bcryptjs");

async function addUserToDB(values) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await db.addNewUser(values, hashedPassword);
    console.log("User successfully added: ");
    console.log(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  addUserToDB
}