const { req, res } = require('express');
const express = require('express');
const UserController = require('./controllers/user');
const userController = new UserController();
const app = express();
app.use(express.json())
app.listen(3000, () => {
  console.log(`Servidor Rodando`);
});

app.get('/users', userController.find);

app.post('/user', userController.create);