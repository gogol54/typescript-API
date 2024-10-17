import {
  Request, 
  Response
} from 'express'
import jwt from 'jsonwebtoken'
import { loginService } from '../services/login.service'
import { 
  getUserByID, 
  updateUserByID 
} from '../services/user.service'

export const loginController = async (req: Request, res: Response) => {
  const data = req.body
  const response = await loginService(data, res)
  res.status(201).send(response)
}

export const logOutController = async (req: Request, res: Response) => {
  let authHeader: any = req.headers.authorization 
  authHeader = authHeader?.replace('Bearer ','')
  let decoded = jwt.verify(authHeader, process.env.JWT_KEY)
  let atl: any = {token: null}
  let user:any = await getUserByID(decoded.id)
  user = await updateUserByID(decoded.id, atl, res)
  res.status(201).send(user)
}