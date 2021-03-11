const database = require('../database');
const User = require('../models/User');

class UserController{

  async create(req, res){
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
  }

  async find(req, res){
    try {
      var selectedUsers
      await database.sync();
      if(!req.body.id){
        selectedUsers = await User.findAll();
      }else{
        selectedUsers = await User.findByPk(req.body.id)
      }
      
      res.status(201).json(selectedUsers)
    } catch (error) {
      console.log(error);
    }
  }

};
module.exports = UserController;