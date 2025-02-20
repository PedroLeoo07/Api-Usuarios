const User = require("../models/User");
const UserList = require("../models/UserList");

const listaUsuarios = new UserList();
const user1 = new User("Leonardo Oliveira", "leonardo.oliveira@gmail.com", 25, "Leo1234@");
listaUsuarios.addUser(user1);

listaUsuarios.addUser(new User("João da Silva", "joao.silva@gmail.com", 100, "Joao1234@"));
listaUsuarios.addUser(new User("André Lucca", "lucca@gmail.com", 18, "andre1234@"));
listaUsuarios.addUser(new User("Maria da Silva", "maria.silva@gmail.com", 20, "maria1234@"));

const router = {
    addUser: (req, res) => {
        try {
            const { name, email, idade, password } = req.body;
            if(!name || !email || !idade || !password){
                throw new Error("Campos obrigatórios não informados!!");
            }
            const usuario = new User(name, email, idade, password);
        } catch (error){
            res.status(400).json({ error: "Erro ao criar novo usuário" });
        }
    }
}