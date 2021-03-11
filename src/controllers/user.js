(async () => {
  const database = require('../database');
  const User = require('../models/user')

  try {
      await database.sync();
      const resultadoCreate = await User.create({
        nome: 'este teste funcionou melhor'
      })
      console.log(resultadoCreate);
  } catch (error) {
      console.log(error);
  }
});