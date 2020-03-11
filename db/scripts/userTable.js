const { query } = require("../index");

async function createUserTable() {
  const resUser = await query(
    `CREATE TABLE IF NOT EXISTS users (
                  userid SERIAL PRIMARY KEY,
                  firstname TEXT, 
                  lastname TEXT,
                  organisation TEXT,
                  email TEXT,
                  phonenumber TEXT,
                  image TEXT,
                 ipaddress CIDR
              )`
  );
  console.log(resUser);
}

createUserTable();
