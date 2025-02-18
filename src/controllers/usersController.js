const User = require("../models/User");
const UserList = require("../models/UserList");

const Lista = new UserList();

Lista.addUSer(new User("Leonardo", "leonardo@gmail.com", 17));
Lista.addUSer(new User("Luiz", "luiz@gmail.com", 16));
Lista.addUSer(new User("Thiago", "Thiago@gmail.com", 25));
Lista.addUSer(new User("Marcello", "marcello@gmail.com", 35));


const router = {
    addUser: (req, res) => {
        try {
            const { name, email, idade} =  req.body;
            if(!name || !email || !idade) {
                throw new Error('Preencha todos os campos pedidos!!');
            }
            const usuario = new User (name, email, idade);
            lista.addUser(usuario);
            res.status(200).json({message: "Usuário criado com sucesso"});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar ao criar o usuário", error});
        }
    },
    
    getAllUsers: (req, res) =>{
        res.json(Lista.getAllUsers());
    },

    getUserById: (req, res) =>{
    }
}

module.exports = router