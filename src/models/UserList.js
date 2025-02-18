class UserList {
    constructor(){
        this.users = [];
    }

    addUser(user){
        this.users.push(user);
    }

    getAllUsers(){
        return this.users;
    }

    getUserById(id){
        const user = this.users.find(user => user.id == id);
        if(!user){
            throw new Error("Usuário não encontrado");
        }
        return user;
    }

    updateUser(id, updateData) {
        const user = getUserById(id);
        Object.assign(user, updateData);
        return user;
    }
    deleteUser(id) {
        this.users = this.users.filter(user => user.id != id);
    }

    getTotalUsers(){
        return this.users.length;
    }
}

module.exports = UserList;
