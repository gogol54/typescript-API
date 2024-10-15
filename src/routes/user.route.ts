import express, { Router } from "express"
import { addUser, listUsers, getUserById, putUser, deleteUser } from "../controllers/user.controller" 
import { verifyToken, verifyTokenAuth, verifyTokenAdmin } from "../middleware/authentication"

const userRouter: Router = express.Router()

userRouter.post('/create', addUser)
userRouter.get('/list', listUsers)
userRouter.get('/:id', verifyTokenAuth, getUserById)
userRouter.put('/update/:id', verifyTokenAuth, putUser)
userRouter.delete('/:id', verifyTokenAuth, deleteUser)
export default userRouter

