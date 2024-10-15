import express from 'express'
import dotenv from 'dotenv'
import { db } from './config/db.config'
import router from './routes'

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', router)

db.then(() => {  
  app.listen(3030, () => {
    console.log("Running on port: http://localhost:"+3030)
  })
})
