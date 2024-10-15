import {
  Request, 
  Response
} from 'express'
import { 
  createPub, 
  getPublications, 
  getPublicationByID, 
  putPublicationByID, 
  deletePublicationByID 
} from '../services/pub.service'

export const addPub = async (req: Request, res: Response) => {
  const data = req.body 
  const response = await createPub(data, res)
  res.status(201).send(response)
}

export const getPubs = async (req: Request, res: Response) => {
  const data = await getPublications()
  res.status(200).send(data)
}

export const getPubById = async (req: Request, res: Response) => {
  const id = req.params.id
  const pub = await getPublicationByID(id)
  res.status(200).send(pub)
}

export const putPub = async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body 
  const pub = await putPublicationByID(id, data)
  res.status(202).send(pub)
}

export const deletePub = async (req: Request, res: Response) => {
  const id = req.params.id
  const pub = await deletePublicationByID(id, res) 
  res.status(200).send(pub)
}