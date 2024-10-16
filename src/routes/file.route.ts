import express, { Router } from "express"
import { 
    addFile ,
    getFiles, 
    getFileId, 
    getFilesByUser, 
    updateFile, 
    deleteFile 
} from "../controllers/file.controller" 
import { 
    verifyTokenAuth,
    verifyTokenAdmin,
    verifyTokenIsReceiver,  
} from "../middleware/authentication"

const fileRouter: Router = express.Router()

fileRouter.post('/create', verifyTokenAdmin, addFile)
fileRouter.get('/files', verifyTokenAdmin, getFiles)
fileRouter.get('/:id', verifyTokenIsReceiver, getFileId)
fileRouter.get('/list/:id', verifyTokenAuth, getFilesByUser)
fileRouter.put('/update/:id',verifyTokenAdmin, updateFile)
fileRouter.delete('/:id', verifyTokenAdmin, deleteFile)

export default fileRouter