const { response } = require('express');
const database = require('../database');
const User = require('../models/User');

module.exports = {
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
  }
}