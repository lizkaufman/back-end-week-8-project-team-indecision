const { query } = require("../index");

async function createTreeTable() {
  const resTree = await query(
    `CREATE TABLE IF NOT EXISTS trees (
                treeid SERIAL PRIMARY KEY,
                latitude TEXT NOT NULL, 
                longitude TEXT NOT NULL,
                userid TEXT,
                species TEXT,
                comment TEXT,
                status TEXT,
                image BYTEA,
                dateplanted DATE,
                daterequested TIMESTAMPTZ
            )`
  );
  console.log(resTree);
}

createTreeTable();
