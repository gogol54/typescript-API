import express, { Router } from "express"
import { addPub, getPubs, getPubById, putPub, deletePub } from "../controllers/pub.controller"
import { verifyToken, verifyTokenAuth, verifyTokenAuthPub } from "../middleware/authentication"
const pubRouter: Router = express.Router()

pubRouter.post('/create', verifyToken, addPub)
pubRouter.get('/list', verifyToken, getPubs)
pubRouter.get('/:id', verifyToken, getPubById)
pubRouter.put('/update/:id', verifyTokenAuthPub, putPub)
pubRouter.delete('/:id', verifyTokenAuthPub, deletePub)

export default pubRouter