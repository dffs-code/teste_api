const database = require('../database');
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async create(req, res){
    try {
        await database.sync();
        await User.create({
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10)
        })
        res.status(201).json({
          mensagem: "Dados Gravados com sucesso"
        })
    } catch (error) {
        console.log(error);
    }
  },

  async find(req, res){
    try {
      var selectedUsers
      await database.sync();
      if(!req.body.id){
        selectedUsers = await User.findAll();
      }else{
        selectedUsers = await User.findByPk(req.body.id)
      }
      
      if(!selectedUsers){
        res.status(404).json({
          mensagem: "não existe esse user"
        })
      }else {
        res.status(201).json(selectedUsers)
      }
    } catch (error) {
      console.log(error);
    }
  },

  async delete(req, res) {
    await database.sync();
    await User.destroy({
      where: {
        id: req.body.id
      }
    })

    res.status(200).json({
      mensagem: "usuário deletado: " + req.body.id
    })
  },

  async updateUser(req, res) {
    await User.update({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      isActive: req.body.isActive,
      isTeacher: req.body.isTeacher
    }, {
      where: {
        id: req.body.id
      }
    })

    res.status(200).json({
      mensagem:"deu certo"
    })
  }
}