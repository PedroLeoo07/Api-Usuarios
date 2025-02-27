const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUserById);
router.post("/users", usersController.addUsers);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUserById);
router.delete("/users", usersController.deleteUser);

module.exports = router;