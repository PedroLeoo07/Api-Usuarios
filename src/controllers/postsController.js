const Post = require("../models/Post");
const PostList = require("../models/PostList");

const listaPost = new PostList();
const post1 = new Post( 34, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBijYLZKgQSstpANQuRL_h3ntGA17JC6AdA&s", 3400, "55.555" "Football", "5 comments");
listaPost.addUser(post1);

listaPost.addPost(new Post( 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKe-WL8XXYVvttO4Zd7Vgu2cGvS2dlNKmGKw&s", 100, "300.000", "Football", "15 comments"));
listaPost.addPost(new Post( 2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKe-WL8XXYVvttO4Zd7Vgu2cGvS2dlNKmGKw&s", 500, "400.000", "Football", "15 comments"));
listaPost.addPost(new Post( 3, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKe-WL8XXYVvttO4Zd7Vgu2cGvS2dlNKmGKw&s", 700, "700.000", "Football", "15 comments"));
listaPost.addPost(new Post( 44, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKe-WL8XXYVvttO4Zd7Vgu2cGvS2dlNKmGKw&s", 100, "100.000", "Football", "15 comments"));
listaPost.addPost(new Post( 77, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKe-WL8XXYVvttO4Zd7Vgu2cGvS2dlNKmGKw&s", 100, "100.000", "Football", "15 comments"));
listaPost.addPost(new Post( 12345, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKe-WL8XXYVvttO4Zd7Vgu2cGvS2dlNKmGKw&s", 100, "100.000", "Football", "15 comments"));

const router = {
    addPost: (req, res) => {
        try {
            const { idUser, url, rescue, likes, category, comment } = req.body;
            if(!idUser || !url || !rescue || !likes, category, comment){
                throw new Error("Campos obrigatórios não informados!!");
            }
            const postagem = new User(idUser, url, rescue, likes, category, comment);
            listaPost.addPost(postagem);
            res.status(201).jaon({ message: "Post criado com sucesso!" });
        } catch (error){
            res.status(400).json({ error: "Erro ao criar o post", error});
        }
    },


    getAllPosts: (req,res) => {
        try{
            const posts = listaPost.getAllPosts();
            res.status(200).json(posts);
        } catch (error){
            res.status(404).json({message: "erro ao buscar todos os posts", error});
        }
    },

    getPostById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(listaPost.getPostById(id));
        } catch (error) {
            res.status(404).json({ message: "Id da postagem não encontrado!", error });
        }
    },
    updatePost: (req, res) => {
        try{
            res.status(200).json(listaPost.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o post", error });
        }
    },

    updatePostById: (req, res) => {
        try{
            res.status(200).json(listaPost.updatePostById(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o post por id", error });
        }
    },

    deletePost: (req, res) => {
        try{
            listaPost.deletePost(req.params.id);
            res.status(200).json({ message: "Post deletado com sucesso!" });
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar o post", error });
        }
    },

    deletePostById: (req, res) => {
        try{
            listaPost.deletePostById(req.params.id);
            res.status(200).json({ message: "Post deletado com sucesso!" });
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar o post por id", error });
        }
    },

    
};

module.exports = router;