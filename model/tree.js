const { query } = require("../db/index");

async function getTreeBySpecies() {
  const data = await query(`SELECT * FROM tree`);
  console.log(data);
  return data.rows;
}

async function getTreeById(id) {
  const data = await query(`SELECT * FROM tree WHERE id = $1`, [id]);
  return data.rows;
}

async function registerTree(body) {
  const {
    treeId,
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
  await query(
    `INSERT INTO pokemon (
        treeId,
        latitude,
        longitude,
        userId,
        species,
        comment,
        status,
        image,
        datePlanted,
        dateRequested) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [
      treeId,
      latitude,
      longitude,
      userId,
      species,
      comment,
      status,
      image,
      datePlanted,
      dateRequested
    ]
  );
}

module.exports = {
  getTreeBySpecies,
  getTreeById,
  registerTree
};
