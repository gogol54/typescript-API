import express, { Router } from "express"
import pubRouter from "./pub.route"
import userRouter from "./user.route"
import fileRouter from "./file.route" 
import loginRouter from "./login.route"

const router = Router()

interface ROUTES {
  path:string;
  router: Router;
} 

const routes: ROUTES[] = [
  {
    path: '/pub',
    router: pubRouter
  },
  {
    path: '/user',
    router: userRouter
  },
  {
    path: '/file',
    router: fileRouter
  },
  {
    path: '/login',
    router: loginRouter
  }
]

routes.forEach((route) => {
  router.use(route.path, route.router)
});

export default router