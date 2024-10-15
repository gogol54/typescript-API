import { model, Schema } from 'mongoose'

export interface StructPub {
  title: string;
  description: string;
  author: string;
  isPublish: boolean;
}

const options = {
  type: String,
  required: true
}

const PubSchema = new Schema<StructPub>({
  title: options,
  description:options,
  author: options,
  isPublish: {
    type: Boolean,
    required: true,
    default: false
  }
},{ timestamps: true });

export const dataPub = model<StructPub>("Pubs", PubSchema)
