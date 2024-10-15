import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const MONGODB_URL: string = process.env.MONGO_URL || ""

let options: any = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000, 
  socketTimeoutMS: 45000,   
  dbName: 'publication'
}

export const db = mongoose
  .connect(MONGODB_URL, options)

  .then((res) => {
    if(res){
      console.log('Database connected sucessfully')
    }
  }).catch((err) => {
    console.log('Warning: '+err)
  });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo")
  }, 300)
})

