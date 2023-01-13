import express from 'express'
import {getBooks,getSearch, getLecture} from '../src/controllers/BooksController'
import {signin, signup} from '../src/controllers/AuthController'
import {validator} from './validator/validator'
const mongoose = require('mongoose')
const router = express.Router()


router.get('/ping', (req,res) => {
    res.json({pong: true})
})

router.get('/books', getBooks)
router.get('/search', getSearch)
router.get('/lecture', getLecture)
router.post('/user/signin', signin)
router.post('/user/signup',validator.editAction, signup)

export default router