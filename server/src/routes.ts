import express from 'express'
import {getBooks,getSearch, getLecture} from '../src/controllers/BooksController'
import {signin} from '../src/controllers/AuthController'
const mongoose = require('mongoose')
const router = express.Router()


router.get('/ping', (req,res) => {
    res.json({pong: true})
})

router.get('/books', getBooks)
router.get('/search', getSearch)
router.get('/lecture', getLecture)
router.post('/user/signin', signin)

export default router