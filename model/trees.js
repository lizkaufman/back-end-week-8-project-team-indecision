const { query } = require("../db/index");

async function getTrees() {
  const data = await query(`SELECT * FROM trees`);
  console.log(data, "getTrees was called");
  return data.rows;
}

async function getSingleTree(treeId) {
  const data = await query(`SELECT * FROM trees WHERE treeid = $1`, [treeId]);
  console.log(data, "getSingTree was called");
  return data.rows;
}

async function delSingleTree(treeId) {
  const data = await query(`DELETE FROM trees WHERE treeid = $1`, [treeId]);
  console.log(data, "getSingTree was called");
  return data.rows;
}

async function putSingleTree(treeId, body) {
  console.log("putSingleTree was called");
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
    `UPDATE trees SET 
        latitude = $1,
        longitude = $2,
        userid = $3,
        species = $4,
        comment = $5,
        status = $6,
        image = $7,
        dateplanted = $8,
        daterequested = $9,
        WHERE treeid = $10 RETURNING *`,
    [
      latitude || null,
      longitude || null,
      userId || null,
      species || null,
      comment || null,
      status || null,
      image || null,
      dateplanted || null,
      daterequested || null,
      treeId
    ]
  );
  console.log(data);
  return data.rows[0];
}

async function patchSingleTree(treeId, body) {
  console.log("patchSinleTree called");
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
    `UPDATE trees SET 
            latitude = COALESCE($1, latitude),
            longitude = COALESCE($2, longitude),
            userid = COALESCE($3, userid),
            species = COALESCE($4, species),
            comment = COALESCE($5, comment),
            status = COALESCE($6, status),
            image = COALESCE($7, image),
            dateplanted = COALESCE($8, dateplanted),
            daterequested = COALESCE($9, daterequested)
            WHERE treeid = $10 RETURNING *`,
    [
      latitude || null,
      longitude || null,
      userId || null,
      species || null,
      comment || null,
      status || null,
      image || null,
      dateplanted || null,
      daterequested || null,
      treeId
    ]
  );
  return data.rows[0];
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
  registerTrees,
  getSingleTree,
  delSingleTree,
  putSingleTree,
  patchSingleTree
};
