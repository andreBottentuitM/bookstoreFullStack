import {Request, Response} from 'express'
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
import { validationResult, matchedData } from 'express-validator'

const generateToken = (user:any) => {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );
  };

export const signin = async (req:Request, res:Response) => {
     
    const user = await User.findOne({ email: req.body.email });
    
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  }

  export const signup = async (req:Request, res:Response) => {
    const errors = validationResult(req)
     
    if(!errors.isEmpty()){
      res.json({error: 'Por favor, verifique se todos os campos estão corretos!'})
      return
    }
    
    const newUser = new User({
      name: req.body.name,
      cpf:req.body.cpf,
      date:req.body.date,
      phone: req.body.phone,
      email: req.body.email,
      cep: req.body.cep,
      street: req.body.street,
      numberResidence: req.body.numberResidence,
      complement:req.body.complement,
      city:req.body.city,
      neighbourhood: req.body.neighbourhood,
      state: req.body.state,
      password: bcrypt.hashSync(req.body.password),
    });

    const data = matchedData(req)
    console.log(data)
    const emailValidation = await User.findOne({
      email: req.body.email
    })
    
    if(emailValidation){
      res.json({
        error:'E-mail já existe.'
    })
    return
    }
    const cpfValidation = await User.findOne({
      cpf: req.body.cpf
    })
    
    if(cpfValidation){
      res.json({
        error:'CPF já existe.'
    })
    return
    }

    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  }