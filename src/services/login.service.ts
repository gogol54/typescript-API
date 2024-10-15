import { Response } from "express"
import { getUserByEmail } from "./user.service"
import { token, verifyPass } from "../middleware/authentication"
import { updateUserByID } from "./user.service"

export const loginService = async (data: any, res:Response) => {
	try {
    let user: any = await getUserByEmail(data.email)
    if(!user){
      res.status(400).json({error: "User not exist!"})
    }
    const verify: boolean = await verifyPass(data.password, user.passwd)
    if(!verify){
      res.status(401).json({error: "Invalid Password!"})
    }
    const tk: string = token(user._id)
    const createTk: any = {token: tk}
    user = await updateUserByID(user._id, createTk, res)
    res.status(200).send(user)
  } catch (error) {
		console.log(error)
	}
}

export const logout = () => {

}