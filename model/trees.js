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
    datePlanted,
    dateRequested
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
        datePlanted,
        dateRequested) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [
      latitude || "N.A.",
      longitude || "N.A.",
      userId || "N.A.",
      species || "N.A.",
      comment || "N.A.",
      status || "N.A.",
      image || "N.A.",
      datePlanted || "N.A.",
      dateRequested || "N.A."
    ]
  );
  return data.rows[0];
}

module.exports = {
  getTrees,
  registerTrees
};
