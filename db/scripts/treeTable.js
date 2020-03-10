const { query } = require("../index");
const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readFile = promisify(fs.readFile);

async function createTreeTable() {
  const data = await readFile(path.join(__dirname, "..", "..", "tree.json"));
  const tree = JSON.parse(data);
  for (let i = 0; i < tree.length; i++) {
    console.log(tree[i]);
    try {
      const resTree = await query(
        `CREATE TABLE IF NOT EXISTS tree (
                treeId SERIAL PRIMARY KEY,
                latitude NUMBER, 
                longitude NUMBER,
                userId STRING,
                species TEXT,
                comment TEXT,
                status TEXT,
                image IMAGE,
                datePlanted DATE,
                dateRequested DATE
            )`
      );
      console.log(resTree);
    } catch (error) {
      console.log(error);
    }
  }
}

createTreeTable();
