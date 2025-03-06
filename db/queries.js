const pool = require("./pool");

// Get (SELECT) functions
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getAllUsers() {
  const { rows } = await pool.query("SELECT * FROM users");
  return rows;
}

async function getUserById(userId) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);
  return rows[0];
}

async function getAllMessageByUser(userId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE author = $1", [userId]);
  return rows;
}

// Add (INSERT) functions
async function addNewUser(values, hashedPassword) {
  const { rows } = await pool.query(`
    INSERT INTO users 
    (email, firstName, lastName, gender, ageGroup, country, pwHash)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7)`, 
    [values.email, values.fName, values.lName, values.gender, values.ageGroup, values.country, hashedPassword]);
  return rows;
}

async function addNewMessage(values, userId) {
  await pool.query(`
    INSERT INTO messages
    (message, timeCreated, timeUpdated, likes, author) 
    VALUES($1, $2, $3, 0, $4)`, 
    [values.message, values.timeCreated, values.timeUpdated, userId]);
}

// Update (UPDATE) functions
// async function updateItem(id, newValues) {
//   const {}
// }

// Delete (DELETE) functions
async function deleteUserById(userId) {
  const { rowCount } = await pool.query("DELETE FROM users WHERE id = $1", [userId]);
  return rowCount;
}

async function deleteMessageById(messageId) {
  const { rowCount } = await pool.query("DELETE FROM messsages WHERE id = $1", [messageId]);
  return rowCount;
}

async function deleteAllFromUsers() {
  await pool.query("DELETE FROM users");
}

async function deleteAllFromMessages() {
  await pool.query("DELETE FROM messages");
}

module.exports = {
  getAllMessages,
  getAllUsers,
  getUserById,
  getAllMessageByUser,
  addNewUser,
  addNewMessage,
  deleteUserById,
  deleteMessageById,
  deleteAllFromUsers,
  deleteAllFromMessages
};