const express = require("express");
const { registerUsers, getUsers } = require("../model/users");
const {
  getTrees,
  registerTrees,
  getSingleTree,
  delSingleTree,
  putSingleTree,
  patchSingleTree
} = require("../model/trees");
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

router.get("/trees/:treeId", async (req, res) => {
  const { treeId } = req.params;
  const tree = await getSingleTree(treeId);
  res.json(tree);
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

router.delete("/trees/:treeId", async (req, res) => {
  const { treeId } = req.params;
  const tree = await delSingleTree(treeId);
  res.json(tree);
});

router.put("/trees/:treeId", async (req, res) => {
  const { treeId } = req.params;
  const body = req.body;
  console.log("put route");
  const tree = await putSingleTree(treeId, body);
  res.json(tree);
});

router.patch("/trees/:treeId", async (req, res) => {
  const { treeId } = req.params;
  const body = req.body;
  console.log("Patch route");
  const tree = await patchSingleTree(treeId, body);
  res.json(tree);
});

module.exports = router;
