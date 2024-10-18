
import express, { Router } from "express"

import { 
  loginController, 
  logOutController 
} from "../controllers/login.controller"
import { 
  verifyToken 
} from "../middleware/authentication"
const loginRouter: Router = express.Router()

loginRouter.post('/login', loginController)
loginRouter.get('/logout', verifyToken, logOutController)
export default loginRouter