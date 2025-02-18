const { v4: uuid } = require("uuid");

class User {
    constructor(name, email, idade){
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.idade = idade;
    }
}

module.exports = User