const { query } = require("../index.js");
const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readFile = promisify(fs.readFile);

async function uploadTree() {
  const data = await readFile(path.join(__dirname, "../dummyData/tree.json"));
  const tree = JSON.parse(data);
  for (let i = 0; i < tree.length; i++) {
    console.log(tree[i]);

    try {
      const {
        treeId,
        latitude,
        longitude,
        userId,
        species,
        comment,
        status,
        image,
        dateplanted,
        daterequested
      } = tree[i];

      const response = await query(
        `INSERT INTO trees (
            treeid,
            latitude,
            longitude,
            userid,
            species,
            comment,
            status,
            image,
            dateplanted,
            daterequested) VALUES ($1,$2,$3,$4,$5,$6, $7, $8, $9, $10)`,
        [
          treeId,
          latitude,
          longitude,
          userId,
          species,
          comment,
          status,
          image,
          dateplanted,
          daterequested
        ]
      );
      console.log(species);
    } catch (error) {
      console.log(error);
    }
  }
}
uploadTree();
