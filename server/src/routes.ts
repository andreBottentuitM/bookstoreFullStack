import express from 'express'
import {getBooks} from '../src/controllers/BooksController'
const mongoose = require('mongoose')
const router = express.Router()


router.get('/ping', (req,res) => {
    res.json({pong: true})
})

router.get('/books', getBooks)

export default router