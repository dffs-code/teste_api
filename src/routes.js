const { Router } = require('express');
const userController = require('./controllers/user');

const routes = Router();

routes.get('/users', userController.find);
routes.post('/user', userController.create);
routes.delete('/user', userController.delete);
routes.put('/user', userController.updateUser);
routes.get('/login', userController.login);
module.exports = routes; 