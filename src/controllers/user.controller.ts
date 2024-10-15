import {
  Request, 
  Response
} from 'express'
import { 
  createUser, 
  getUsers, 
  getUserByID, 
  updateUserByID, 
  deleteUserByID 
} from '../services/user.service'
import { encryptHashing, token } from '../middleware/authentication'

export const addUser = async (req: Request, res: Response) => {
  let data: any = req.body 
  let passwd = req.body.passwd
  const pwd = encryptHashing(passwd)
  data.passwd = pwd
  const response = await createUser(data, res)
  res.status(200).send(response)
}

export const listUsers = async (req: Request, res: Response) => {
  const data = await getUsers()
  res.status(200).send(data)
}

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id
  const user = await getUserByID(id)
  res.status(200).send(user)
}

export const putUser = async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body
  const user = await updateUserByID(id, data, res)
  res.status(202).send(user)
}

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id
  const user = await deleteUserByID(id, res)
  res.status(200).send(user)
}