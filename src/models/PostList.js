class PostList {
    constructor(){
        this.posts = [];
    }

    addPost(post){
        this.posts.push(post);
    }

    getAllPosts(){
        return this.posts;
    }

    getPostById(id){
        const post = this.posts.find(post => post.id == id);
        if(!post){
            throw new Error("Post não encontradado!");
        }
        return post;
    }

    updatePost(id, updateData) {
        const post = getPostById(id);
        Object.assign(post, updateData);
        return post;
    }
    deletePost(id) {
        this.posts = this.posts.filter(post => post.id != id);
    }

    getTotalPosts(){
        return this.posts.length;
    }

    getTotalPosts(){
        return this.posts.length;
    }

    getPostsByUserId(userId){
        return this.posts.filter(post => post.userId == userId);
    }

    createPost(post){
        this.posts.push(post);
    }

    deletePostById(id){
        this.posts = this.posts.filter(post => post.id != id);
    }

    updatePostById(id, updateData){
        const post = this.getPostById(id);
        Object.assign(post, updateData);
        return post;
    }

    findPostById(id){
        return this.posts.find(post => post.id == id);
    }
    
    findPostByUserId(userId){
        return this.posts.find(post => post.userId == userId);
    }

    findPostByTitle(title){
        return this.posts.find(post => post.title == title);
    }

    findPostByBody(body){
        return this.posts.find(post => post.body == body);
    }
    
}

module.exports = PostList;
