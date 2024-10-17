import { Response } from "express"
import { dataPub, StructPub } from "../models/pub.model"

export const createPub = async (pubBody: StructPub, res: Response) => {
  try {
    const newPub = await dataPub.create(pubBody)
    return newPub
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getPublications = async () => {
  try {
    const pubs = await dataPub.find()
    return pubs
  } catch (error) {
    console.log(error)
  }
}

export const getPublicationByID = async (id: string) => {
  try {
    const pub = await dataPub.findById(id)
    return pub
  } catch (error) {
    console.log(error)
  }
}

export const putPublicationByID = async (id: string, pubBody: StructPub) => {
  try {
    let pub = await dataPub.findByIdAndUpdate(id, pubBody)
    pub = await dataPub.findById(id)
    return pub
  } catch (error) {
    console.log(error)
  }
}

export const deletePublicationByID = async (id: string, res: Response) => {
  try {
    await dataPub.findById(id).then( async (user) => { 
      if(!user)
        res.status(404).send({message: 'Bad request, user not exists!'})
      await dataPub.findByIdAndDelete(id)
      res.send({message: 'ok publication '+ user +' deleted'})
    }).catch((err) => {
      res.status(300).send(err)
    })
    
  } catch (error) {
    console.log(error)
  }
}