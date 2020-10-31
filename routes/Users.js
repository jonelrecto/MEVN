const express = require('express')
const users = express.Router()
const cors =require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

require('dotenv').config({path: '/full/custom/path/to/your/env/vars'})





const User = require('../models/Users')
users.use(cors())

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'registered'})
            })
            .catch(err => {
              res.send('error: ', err)
            })
        })
      } else {
        res.json({ error: 'user already exist'})
      }
    })
    .catch(err => {
      res.status(err).send('asdf')
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      // console.log(user, 'user response')
      // console.log(req.body, 'body')
      // console.log(process.env, 'process')
      if (user) {
         if (bcrypt.compareSync(req.body.password, user.password)) {
           
      
           let token = jwt.sign(user.dataValues, 'hehe', {
             expiresIn: 1440
           })
          // console.log(token, 'token')
           res.send(token)
         }
      } else {
        res.status(400).json( { error: 'user doesnt exist'})
      }
    })
    .catch(err => {
      // console.log(err, 'an err')
      res.status(400).json({ error: err })
    })
})

module.exports = users