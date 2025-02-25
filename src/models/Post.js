const { v4: uuid } = require("uuid");

class Post {
    constructor(idUser, rescue, likes, category, comment){
        this.id = uuid();
        this.idUser = idUser;
        this.rescue = rescue;
        this.likes = likes;
        this.category = category;
        this.comment = comment;
    }
}

module.exports = Post