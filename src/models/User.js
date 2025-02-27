const { v4: uuid } = require("uuid");

class Users {
    constructor(name, email, idade, password){
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.idade = idade;
        this.password = password;
    }
}

module.exports = Users