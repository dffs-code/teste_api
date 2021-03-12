const Sequelize = require('sequelize');
const database = require('../database');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
    },
    isTeacher: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false
    }
});

module.exports = User;