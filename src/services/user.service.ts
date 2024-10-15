import { Response } from "express"
import {dataUser, StructUser} from '../models/user.model'
export const createUser = async (userBody: StructUser, res: Response) => {
    try {
      const newUser = await dataUser.create(userBody)
      return newUser
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
  
  export const getUsers = async () => {
    try {
      const users = await dataUser.find()
      return users
    } catch (error) {
      console.log(error)
    }
  }
  
  export const getUserByID = async (id: string) => {
    try {
      const user = await dataUser.findById(id)
      return user
    } catch (error) {
      console.log(error)
    }
  }

  export const getUserByEmail = async (email: string) => {
    try {
      const user = await dataUser.findOne({
        "email": email
      }) 
      return user
    } catch (error) {
      console.log(error)
    }
  }
  export const updateUserByID = async (id: string, data: StructUser, res: Response) => {
    try {
      let user = await dataUser.findByIdAndUpdate(id, data)
      user = await dataUser.findById(id)
      res.status(200).send(user)
    } catch (error) {
      console.log(error)
    }
  }

export const deleteUserByID = async (id: string, res:Response) => {
  try {
    await dataUser.findById(id).then( async (user) => { 
      if(!user)
        res.status(404).send({message: 'Bad request, user not exists!'})
      await dataUser.findByIdAndDelete(id)
      res.send({message: 'User '+ user?.name +' has deleted!'})
    }).catch((err) => {
      res.status(300).send(err)
    })
  } catch (error) {
    console.log(error)
  }
}