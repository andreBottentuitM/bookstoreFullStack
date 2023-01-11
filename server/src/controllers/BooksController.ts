import {Request, Response} from 'express'
const Book = require('../models/Books')
    
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

    export const getLecture = async (req:Request, res:Response) => {
        
  let lectureType = req.query.value
  let filtersLecture:any = {}

  if(lectureType){
    filtersLecture.lecture = {'$regex': lectureType, '$options': 'i'}
  }
  
  const lectureTypeDB = await Book.find(filtersLecture).exec()

  res.json({lectureTypeDB})

    }

