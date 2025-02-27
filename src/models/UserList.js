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

    createUser(user){
        this.users.push(user);
    }

    deleteUserById(id){
        this.users = this.users.filter(user => user.id != id);
    }

    updateUserById(id, updateData){
        const user = this.getUserById(id);
        Object.assign(user, updateData);
        return user;
    }

    findUserById(id){
        return this.users.find(user => user.id == id);
    }   

    findUserByEmail(email){
        return this.users.find(user => user.email == email);
    }
    
    findUserByName(name){
        return this.users.find(user => user.name == name);
    }

    findUserByPassword(password){
        return this.users.find(user => user.password == password);
    }

    findUserByRole(role){
        return this.users.find(user => user.role == role);
    }       

    findUserByUsername(username){
        return this.users.find(user => user.username == username);
    }

    findUserByBio(bio){
        return this.users.find(user => user.bio == bio);
    }
}

module.exports = UserList;
