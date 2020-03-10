const { query } = require("../db/index");

async function registerUser(body) {
  const {
    userId,
    firstName,
    lastName,
    organisation,
    email,
    phoneNumber,
    image,
    ipAddress
  } = body;
  const data = await query(
    `INSERT INTO user ( userId,
            firstName, lastName, organisation, email, phoneNumber, image, ipAddress) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      userId,
      firstName,
      lastName,
      organisation,
      phoneNumber,
      image,
      email,
      ipAddress
    ]
  );
  return data;
}

async function getUser() {
  const data = await query(`SELECT * FROM user`);
  console.log(data);
  return data.rows;
}

async function getUserById(id) {
  const data = await query(`SELECT * FROM user WHERE id = $1`, [id]);
  return data.rows;
}

async function getUserByName(name) {
  const data = await query(`SELECT * FROM user WHERE name ILIKE $1`, [name]);
  return data.rows;
}

module.exports = { registerUser, getUser, getUserById, getUserByName };
