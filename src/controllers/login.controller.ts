import {
  Request, 
  Response
} from 'express'

import { loginService } from '../services/login.service'

export const loginController = async (req: Request, res: Response) => {
  const data = req.body
  const response = await loginService(data, res)
  res.status(201).send(response)
}
