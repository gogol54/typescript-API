import { Request, Response } from 'express'
import { dataFile, StructFile } from '../models/file.model'

export const createFile = async (fileBody: StructFile, res: Response) => {
  try {
    console.log(fileBody)
    const newFile = await dataFile.create(fileBody)
    return newFile
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

export const getAllFiles = async () => {
  try {
    const files = await dataFile.find()
    return files
  } catch (error) {
    console.log(error)
  }
}
export const getFileByID = async (id: string) => {
    try {
      const file = await dataFile.findById(id)
      return file
    } catch (error) {
      console.log(error)
    }
  }

//this function need change on data identificator 
export const getFilesByIdUser = async (id: string) => {
  try {
    const files = await dataFile.find({
      "userID_receiver": id
    })
    return files
  } catch (error) {
    console.log(error)
  }
}
export const udpateFileByID = async (id:string, data: StructFile, res:Response) => {
  try {
    let user = await dataFile.findByIdAndUpdate(id, data)
    user = await dataFile.findById(id)
    res.status(200).send(user)
  } catch (error) {
    console.log(error)
  }
}

export const deleteFileByID = async (id:string, res:Response) => {
  try {
    await dataFile.findById(id).then( async (file) => { 
      if(!file)
        res.status(404).send({message: 'Bad request, file not exists!'})
      await dataFile.findByIdAndDelete(id)
      res.send({message: 'File '+ file?.filename +' has deleted!'})
    }).catch((err) => {
      res.status(300).send(err)
    })
  } catch (error) {
    console.log(error)
  }
}