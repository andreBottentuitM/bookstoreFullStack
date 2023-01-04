import {Request, Response} from 'express'
const Book = require('../models/Books')
import mongoose from 'mongoose'
    
    export const getBooks = async (req:Request, res:Response) => {
        
        let books = await Book.find()//vai pegar todos os livros.
            
        res.json({books})
    }

