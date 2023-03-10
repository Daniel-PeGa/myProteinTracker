require('dotenv').config();

const Sequelize = require('sequelize');

conse sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        user: 'root',
        password: 'password',
        
        dialectOptions: {
            decimalNumbers: true,
        },
    });
