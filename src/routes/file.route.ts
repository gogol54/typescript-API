import express, { Router } from "express"
import { addFile ,getFiles, getFileId, getFilesByUser, updateFile, deleteFile } from "../controllers/file.controller" 

const fileRouter: Router = express.Router()

fileRouter.post('/create', addFile)
fileRouter.get('/files', getFiles)
fileRouter.get('/:id', getFileId)
fileRouter.get('/list/:id', getFilesByUser)
fileRouter.put('/update/:id', updateFile)
fileRouter.delete('/:id', deleteFile)

export default fileRouter