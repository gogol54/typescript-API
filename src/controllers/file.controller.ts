import {
  Request, 
  Response
} from 'express'
import { 
  createFile, 
  getAllFiles, 
  getFileByID, 
  getFilesByIdUser, 
  udpateFileByID, 
  deleteFileByID
} from '../services/file.service'

export const addFile = async (req: Request, res: Response) => {
  const data = req.body 
  const response = await createFile(data, res)
  res.send(response)
}

export const getFiles = async (req: Request, res: Response) => {
  const data = await getAllFiles()
  res.send(data)
}

export const getFileId = async (req: Request, res: Response) => {
  const id = req.params.id
  const file = await getFileByID(id)
  res.send(file)
}

export const getFilesByUser = async (req: Request, res: Response) => {
    //find id user of receiver 
    const id = req.params.id
    const files = await getFilesByIdUser(id)
    res.send(files)
  }
export const updateFile = async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body
  const up = await udpateFileByID(id, data, res)
  res.status(202).send(up)
}

export const deleteFile = async (req: Request, res: Response) => {
  const id = req.params.id
  const rm = await deleteFileByID(id, res)
  res.status(200).send(rm)
}