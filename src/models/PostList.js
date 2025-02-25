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

    getTotalUsers(){
        return this.posts.length;
    }
}

module.exports = PostList;
