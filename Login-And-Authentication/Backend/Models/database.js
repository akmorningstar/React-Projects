require('dotenv').config();
const mysql = require('mysql2');

const config =  require('../config/config.json');


const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

// So can also use this code to connect to the database but it will not work if server is not running
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD
// });

// require('dotenv').config();

// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASS:', process.env.DB_PASS);
// console.log('DB_NAME:', process.env.DB_NAME);


// (async () => {
//     try {
//         const connection = await pool.getConnection();
//         console.log('Database connected successfully!');
//         connection.release(); // Release the connection back to the pool
//     } catch (err) {
//         console.error('Database connection failed:', err.message);
//     }
// })();
module.exports = pool.promise();

