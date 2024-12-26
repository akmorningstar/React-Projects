const pool = require('./database');
class UserModel {
    constructor(user) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
    
    static getAllUsers() {
        return pool.execute('SELECT * FROM users')
        .then(([rows]) => {
            return rows;
        })
        .catch((err) => {
            console.error('Fetching users failed:', err.message);
        });
    }

    static getUserByUsername(username) {
        return pool.execute('SELECT * FROM users WHERE username = ?', [username])
        .then(([rows]) => {
            return rows;
        })
        .catch((err) => {
            console.error('Fetching user failed:', err.message);
        });
    }
    static getUserByEmail(email) {
        return pool.execute('SELECT * FROM users WHERE email = ?', [email])
        .then(([rows]) => {
            return rows;
        })
        .catch((err) => {
            console.error('Fetching user failed:', err.message);
        });
    }
    static deleteUserByUsername(username) {
        return pool.execute('DELETE FROM users WHERE username = ?', [username])
        .then(([rows]) => {
            console.log('User deleted successfully');
        })
        .catch((err) => {
            console.error('User deletion failed:', err.message);
        });
    }
    static deleteUserByEmail(email) {
        return pool.execute('DELETE FROM users WHERE email = ?', [email])
        .then(([rows]) => {
            console.log('User deleted successfully');
        })
        .catch((err) => {
            console.error('User deletion failed:', err.message);
        });
    }
    static  createUser(user) {
        console.log(user);
        return pool.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password])
        .then(([rows]) => {
            console.log('User created successfully');
            return 'User created successfully';
        })
        .catch((err) => {
            console.error('User creation failed:', err.message);
            return 'User creation failed';
        });


    
}
}
module.exports = UserModel;

// testing the user model
// user = new UserModel({ name: 'John Doe', email: 'john@gmail.com', password: 'password'});
// UserModel.createUser(user);
// UserModel.getAllUsers().then((users) => {
//     console.log(users);
// });
