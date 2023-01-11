import {Request, Response} from 'express'
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
        console.log('test')
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