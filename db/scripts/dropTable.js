const { query } = require("../index.js");

async function dropTableUser() {
  try {
    const response = await query(`DROP TABLE user`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
dropTableUser();

async function dropTableTree() {
  try {
    const response = await query(`DROP TABLE Tree`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
dropTableTree();
