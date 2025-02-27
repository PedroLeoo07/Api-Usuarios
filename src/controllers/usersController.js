const User = require("../models/User");
const UserList = require("../models/UserList");

const listaUsuarios = new UserList();
const user1 = new User("Leonardo Oliveira", "leonardo.oliveira@gmail.com", 25, "Leo1234@");
listaUsuarios.addUser(user1);

listaUsuarios.addUser(new User("João da Silva", "joao.silva@gmail.com", 100, "Joao1234@"));
listaUsuarios.addUser(new User("André Lucca", "lucca@gmail.com", 18, "andre1234@"));
listaUsuarios.addUser(new User("Maria da Silva", "maria.silva@gmail.com", 20, "maria1234@"));

const router = {
  addUsers: (req, res) => {
    try {
      const { name, email, idade, password } = req.body;
      if (!name || !email || !idade || !password) {
        throw new error("Campos obrigatórios não informados!!");
      }
      const novoUsuario = new User(name, email, idade, password);
      listaUsuarios.addUser(novoUsuario);
      res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
      res.status(400).json({ error: "Erro ao criar novo usuário", error });
    }
  },

    getAllUsers: (req,res) => {
        try{
            const users = listaUsuarios.getAllUsers();
            res.status(200).json(users);
        } catch (error){
            res.status(404).json({message: "erro ao buscar todos os usuários", error});
        }
    },

    getUserById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(listaUsuarios.getUserById(id));
        } catch (error) {
            res.status(404).json({ message: "Id do usuário não encontrado", error });
        }
    },
    updateUser: (req, res) => {
        try{
            res.status(200).json(listaUsuarios.updateUser(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message,
            })
        }
    },

    deleteUser: (req, res) => {
        try{
            listaUsuarios.deleteUser(req.params.id);
            res.status(200).json({ message: "Usuário deletado com sucesso!" });
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar o usuário", erro });
        }
    },

    deleteUserById: (req, res) => {
        try{
            listaUsuarios.deleteUserById(req.params.id);
            res.status(200).json({ message: "Usuário deletado por id com sucesso!" });
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar o usuário, por id", error });
        }
    },

    updateUserById: (req, res) => {
        try{
            const user = listaUsuarios.updateUserById(req.params.id, req.body);
            res.status(200).json({ message: "Usuário atualizado com sucesso!", user });
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o usuário, por id", error });
        }

    },

};

module.exports = router;