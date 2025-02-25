const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");

router.get("/post", postsController.getAllPosts);
router.get("/post/:id", postsController.getPostById);
router.post("/users", postsController.addPost);
router.put("/users/:id", postsController.updatePost);
router.delete("/users/:id", postsController.deletePostById);
router.delete("/users", postsController.deletePost);
router.put("/users/:id", postsController.updatePostById);

module.exports = router;