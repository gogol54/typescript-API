
import express, { Router } from "express"

import { loginController } from "../controllers/login.controller"
 
const loginRouter: Router = express.Router()

loginRouter.post('/', loginController)

export default loginRouter

