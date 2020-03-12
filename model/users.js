const { query } = require("../db/index");

async function getUsers() {
  const data = await query(`SELECT * FROM users`);
  console.log(data, "This was called");
  return data.rows;
}

async function registerUsers(body) {
  const {
    firstname,
    lastname,
    organisation,
    email,
    phonenumber,
    image,
    ipaddress
  } = body;
  const data = await query(
    `INSERT INTO users (
            firstName, lastName, organisation, email, phoneNumber, image, ipaddress) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      // if some of the info isn't supplied, we'll default to null
      firstname || null,
      lastname || null,
      organisation || null,
      email || null,
      phonenumber || null, // TODO: Phone number should be string in db
      image || null,
      ipaddress || null
    ]
  );
  return data.rows[0];
}

module.exports = { getUsers, registerUsers };
