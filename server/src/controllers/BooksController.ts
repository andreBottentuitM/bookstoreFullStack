import {Request, Response} from 'express'
const Book = require('../models/Books')
import mongoose from 'mongoose'
    
    export const getBooks = async (req:Request, res:Response) => {
        
        let books = await Book.find()//vai pegar todos os livros.
            
        res.json({books})
    }

    export const getSearch = async (req:Request, res:Response) => {
        
        let valueSearch = req.query.value
           let filtersName:any = {}
           let filtersAuthor:any = {}
        if(valueSearch){
            filtersName.name = {'$regex': valueSearch, '$options': 'i'}
            filtersAuthor.author = {'$regex': valueSearch, '$options': 'i'}
        }

        const searchName = await Book.find({'$or':[{name:{'$regex': valueSearch, '$options': 'i'}},{author:{'$regex': valueSearch, '$options': 'i'}}]}).exec()

        res.json({searchName})
    }

