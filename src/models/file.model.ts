import { model, Schema } from 'mongoose'

export interface StructFile {
  filename: string;
  description: string;
  userID_sender: string;
  userID_receiver:string;
}

const FileSchema = new Schema<StructFile>({
  filename: {
    type: String,
    required: true
  },
  description: {
    type: String, 
  },
  userID_sender: {
    type: String, 
  },
  userID_receiver: {
    type: String, 
    required: true
  }
  
},{ timestamps: true });

export const dataFile = model<StructFile>("Files", FileSchema)