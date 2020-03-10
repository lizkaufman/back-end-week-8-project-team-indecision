const express = require("express");
const {
  registerUser,
  getUser,
  getUserById,
  getUserByName
} = require("../model/user");
const {
  getTreeBySpecies,
  getTreeById,
  registerTree
} = require("../model/tree");
const router = express.Router();

/* GET home page. */

// router.get("/user", function(req, res, next) {
//   res.json({ message: "Index Route" });
// });

router.get("/user", async (request, response) => {
  const { user } = request.query;
  if (user) {
    const user = await getUser(user);
    response.json(user);
    return;
  }
});

router.get("/user/name", async (request, response) => {
  const { name } = request.query;
  if (name) {
    const namedUser = await getUserByName(name);
    response.json(namedUser);
    return;
  }
});

router.get("/user/:id", async (request, response) => {
  const { userId } = request.query;
  if (userId) {
    const userId = await getUserById(userId);
    response.json(userId);
    return;
  }
});

router.post("/user", async (request, response) => {
  const body = request.body;
  const user = await registerUser(body);
  if (user) {
    return response.json({
      success: true,
      payload: `${user} has been created`
    });
  }
  response.json({ success: false, message: "try again" });
});

router.get("/tree", async (request, response) => {
  const { tree } = request.query;
  if (tree) {
    const tree = await getTree(tree);
    response.json(tree);
    return;
  }
});

router.get("/tree/name", async (request, response) => {
  const { treeName } = request.query;
  if (treeName) {
    const namedTree = await getTreeBySpecies(treeName);
    response.json(namedTree);
    return;
  }
});

router.get("/tree/:id", async (request, response) => {
  const { treeId } = request.query;
  if (treeId) {
    const treeId = await getTreeById(treeId);
    response.json(treeId);
    return;
  }
});

router.post("/tree", async (request, response) => {
  const body = request.body;
  const tree = await registerTree(tree);
  if (tree) {
    return response.json({
      success: true,
      payload: `${tree} has been created`
    });
  }
  response.json({ success: false, message: "try again" });
});

module.exports = router;
