const { query } = require("../index");

async function createTreeTable() {
  const resTree = await query(
    `CREATE TABLE IF NOT EXISTS trees (
                treeid SERIAL,
                latitude NUMERIC(8,6), 
                longitude NUMERIC(7,6),
                userid SERIAL,
                species TEXT,
                comment TEXT,
                status TEXT,
                image TEXT,
                dateplanted TIMESTAMPTZ,
                daterequested TIMESTAMPTZ
            )`
  );
  console.log(resTree);
}

createTreeTable();
