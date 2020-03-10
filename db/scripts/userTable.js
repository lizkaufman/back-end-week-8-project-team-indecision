const { query } = require("query");

async function createUserTable() {
  const data = await readFile(path.join(__dirname, "..", "..", "user.json"));
  const user = JSON.parse(data);
  for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
    try {
      const resUser = await query(
        `CREATE TABLE IF NOT EXISTS user (
                  userId SERIAL PRIMARY KEY,
                  firstName TEXT, 
                  lastName TEXT,
                  organisation TEXT,
                  email TEXT,
                  phoneNumber NUMBER,
                  image IMAGE,
                 ipAddress STRING
              )`
      );
      console.log(resUser);
    } catch (error) {
      console.log(error);
    }
  }
}

createUserTable();
