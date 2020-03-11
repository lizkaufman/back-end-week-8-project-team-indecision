const { query } = require("../db/index");

async function getUsers() {
  const data = await query(`SELECT * FROM users`);
  console.log(data, "This was called");
  return data.rows;
}

async function registerUsers(body) {
  const {
    firstName,
    lastName,
    organisation,
    email,
    phoneNumber,
    image,
    ipAddress
  } = body;
  const data = await query(
    `INSERT INTO users (
            firstName, lastName, organisation, email, phoneNumber, image, ipAddress) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      // if some of the info isn't supplied, we'll default to "N.A."
      firstName || "N.A.",
      lastName || "N.A.",
      organisation || "N.A.",
      email || "N.A.",
      phoneNumber || "N.A.", // TODO: Phone number should be string in db
      image || "N.A.",
      ipAddress || "N.A."
    ]
  );
  return data.rows[0];
}

module.exports = { getUsers, registerUsers };
