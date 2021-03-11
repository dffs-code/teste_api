const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const userController = require('./controllers/user')
app.listen(port, () => {
  console.log(`Servidor Rodando`);
});

app.get('/users', async (req, res) => {
  const database = require('./database');
  const User = require('./models/user');

  try {
      await database.sync();
      const resultadoCreate = await User.findAll();
      res.status(201).json(resultadoCreate)
  } catch (error) {
      console.log(error);
  }
});

app.post('/', async (req, res) => {
  const database = require('./database');
  const User = require('./models/user')

  try {
      await database.sync();
      const resultadoCreate = await User.create({
        nome: 'funciona'
      })
      res.status(201).json({
        mensagem: "Dados Gravados com sucesso"
      })
  } catch (error) {
      console.log(error);
  }
});