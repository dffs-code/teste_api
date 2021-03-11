const { req, res } = require('express');
const express = require('express');
const app = express();
app.use(express.json())
app.listen(3000, () => {
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

app.post('/user', async (req, res) => {
  const database = require('./database');
  const User = require('./models/user')

  try {
      await database.sync();
      await User.create({
        nome: req.body.nome
      })
      res.status(201).json({
        mensagem: "Dados Gravados com sucesso"
      })
  } catch (error) {
      console.log(error);
  }
});