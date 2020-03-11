const express = require("express");
const { registerUsers, getUsers } = require("../model/users");
const { getTrees, registerTrees } = require("../model/trees");
const router = express.Router();

router.get("/users", async (request, response) => {
  const user = await getUsers();
  response.json(user);
  return;
});

router.post("/users", async (request, response) => {
  const body = request.body;
  const user = await registerUsers(body);
  if (user) {
    return response.json({
      success: true,
      payload: `${JSON.stringify(user)} has been created`
    });
  }
  response.json({ success: false, message: "try again" });
});

// TREES ROUTER BEGINS HERE

router.get("/trees", async (request, response) => {
  const tree = await getTrees();
  response.json(tree);
  return;
});

router.post("/trees", async (request, response) => {
  const body = request.body;
  const tree = await registerTrees(body);
  if (tree) {
    return response.json({
      success: true,
      payload: `${JSON.stringify(tree)} has been created`
    });
  }
  response.json({ success: false, message: "try again" });
});

// router.post("/register", async (request, response) => {
//   const body = request.body;
//   // here destructre the body into actualy properties, and then
//   // create an object you can pass into the registerUsers and another
//   // to pass into registerTrees

//   const requestUser = {
//     firstName: body.fName,
//     lastName: body.lName,
//     organisation: body.org,
//     email: body.email,
//     phoneNumber: body.phone
//   };

//   const requestTree = {
//     species: body.species,
//     datePlanted: body.datePlanted,
//     comment: body.comment,
//     image: body.treePic
//   };

//   try {
//     const user = await registerUsers(requestUser);
//     if (user) {
//       requestTree.userId = user.userid;
//       // console.log(userId, "can reach this");
//       const tree = await registerTrees(requestTree);
//       if (tree) {
//         return response.json({
//           payload: { user, tree }
//         });
//       }
//     }
//   } catch (error) {
//     response.status(500).send({ error: "something went wrong", error });
//   }
// });
//SCENARIO 1
//When a new user creates a new tree.
//Crate user and tree.
//Return success msg.

//SCENARIO 2
//Exisiting user creates new tree.
//Check whether they exist.
//If they are there, don't create new user but return their user ID.
// Take tree information and add this.
//Create success message.

// Ficgure out what data is actually needed!
module.exports = router;
