const { query } = require("../index");

async function createTreeTable() {
  const resTree = await query(
    `CREATE TABLE IF NOT EXISTS trees (
                treeid SERIAL,
                latitude NUMERIC(8,6) NOT NULL, 
                longitude NUMERIC(7,6) NOT NULL,
                userid SERIAL,
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
