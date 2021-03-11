const { Router } = require('express');
const userController = require('./controllers/user');

const routes = Router();

routes.get('/users', userController.find);
routes.post('/user', userController.create);

module.exports = routes; 