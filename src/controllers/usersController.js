const User = require("../models/User");
const UserList = require("../models/UserList");

const Lista = new UserList();

Lista.addUSer(new User("Leonardo", "leonardo@gmail.com", 17));
Lista.addUSer(new User("Luiz", "luiz@gmail.com", 16));

const router = {
    getAllUsers: (req, res) =>{
        res.json(Lista.getAllUsers());
    },

    getUserById: (req, res) =>{
    }
}

module.exports = router