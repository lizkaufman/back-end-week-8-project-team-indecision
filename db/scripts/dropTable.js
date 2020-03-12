const { query } = require("../index.js");

async function dropTableUser() {
  try {
    const response = await query(`DROP TABLE users`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
dropTableUser();

async function dropTableTree() {
  try {
    const response = await query(`DROP TABLE trees`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
dropTableTree();
