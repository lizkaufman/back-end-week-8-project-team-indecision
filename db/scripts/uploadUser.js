const { query } = require("../index.js");
const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readFile = promisify(fs.readFile);

async function uploadUser() {
  const data = await readFile(path.join(__dirname, "../dummyData/user.json"));
  const user = JSON.parse(data);
  for (let i = 0; i < user.length; i++) {
    console.log(user[i]);

    try {
      const {
        userId,
        firstName,
        lastName,
        organisation,
        email,
        phoneNumber,
        image,
        ipAddress
      } = user[i];

      const response = await query(
        `INSERT INTO users (
            userid,
            firstname,
            lastname,
            organisation,
            email,
            phonenumber,
            image,
            ipaddress) VALUES ($1,$2,$3,$4,$5,$6, $7, $8)`,
        [
          userId,
          firstName,
          lastName,
          organisation,
          email,
          phoneNumber,
          image,
          ipAddress
        ]
      );
      console.log(firstName);
    } catch (error) {
      console.log(error);
    }
  }
}
uploadUser();
