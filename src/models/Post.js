const { v4: uuid } = require("uuid");

class Post {
    constructor(idUser, url ,rescue, likes, category, comment){
        this.id = uuid();
        this.idUser = idUser;
        this.url = url;
        this.rescue = rescue;
        this.likes = likes;
        this.category = category;
        this.comment = comment;
    }
}

module.exports = Post