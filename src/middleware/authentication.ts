import { 
  Request, 
  Response, 
  NextFunction 
} from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getUserByID } from '../services/user.service'
import { getPublicationByID } from '../services/pub.service'
export const token = (data: any) => {
  return jwt.sign({
    id: data
  }, process.env.JWT_KEY, { expiresIn: '2 days'});
}

export const encryptHashing = (password: string) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), process.env)
}

export const verifyPass = async (password: string, localPassword: string) => {
  let validate = bcrypt.compareSync(password, localPassword)
  return validate
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  let authHeader: string = req.headers.authorization ? req.headers.authorization : ''
  authHeader = authHeader.replace('Bearer ','')
  let aux = jwt.verify(authHeader, process.env.JWT_KEY)
  if(authHeader  && authHeader != undefined){
    jwt.verify(authHeader, process.env.JWT_KEY, (err, user) =>{
      if(err) {
        res.status(403).json("Token is not valid!")
      }
      else{ 
        req.user = user;
        next();
      }
    })
  }else {
    return res.status(401).json("You are not authenticated!")
  }
}

export const verifyTokenAuth = async (req:Request, res:Response, next:NextFunction) => {
  let isCurrent: any = await getUserByID(req.params.id)
  let authHeader: any = req.headers.authorization 
  authHeader = authHeader?.replace('Bearer ','')
  let decoded = jwt.verify(authHeader, process.env.JWT_KEY)
  const aux:any = isCurrent ? isCurrent._id : false
  let user: any = await getUserByID(decoded.id)
  if(req.params.id === decoded.id || user.isAdmin){
    verifyToken(req, res, ()=> {
      next()
    })
  }else {
    return res.status(403).json("You not allowed to that!")
  }
}

export const verifyTokenAuthPub = async (req:Request, res:Response, next:NextFunction) => {
  let isAuthor: any = await getPublicationByID(req.params.id)
  let authHeader: any = req.headers.authorization 
  authHeader = authHeader?.replace('Bearer ','')
  let decoded = jwt.verify(authHeader, process.env.JWT_KEY)
  let user: any = await getUserByID(decoded.id)
  if(isAuthor.author === decoded.id || user.isAdmin){
    verifyToken(req, res, ()=> {
      next()
    })
  }else {
    return res.status(403).json("You not allowed to that!")
  }
}

export const verifyTokenAdmin = async (req: Request, res:Response, next:NextFunction) => {
  let authHeader: any = req.headers.authorization 
  let decoded = jwt.verify(authHeader, process.env.JWT_KEY)
  let user: any = await getUserByID(decoded.id)
  verifyToken(req, res, ()=> {
    if(user.isAdmin){
      next()
    }else {
      res.status(403).json("You are not alowed to do that! just ADMIN!")
    }
  })
}