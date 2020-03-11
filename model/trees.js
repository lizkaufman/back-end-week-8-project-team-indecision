const { query } = require("../db/index");

async function getTrees() {
  const data = await query(`SELECT * FROM trees`);
  console.log(data, "This was called");
  return data.rows;
}

async function registerTrees(body) {
  const {
    latitude,
    longitude,
    userId,
    species,
    comment,
    status,
    image,
    dateplanted,
    daterequested
  } = body;
  const data = await query(
    `INSERT INTO trees (
        latitude,
        longitude,
        userid,
        species,
        comment,
        status,
        image,
        dateplanted,
        daterequested) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [
      latitude || null,
      longitude || null,
      userId || null,
      species || null,
      comment || null,
      status || null,
      image || null,
      dateplanted || null,
      daterequested || null
    ]
  );
  return data.rows[0];
}

module.exports = {
  getTrees,
  registerTrees
};
