import { model, Schema } from 'mongoose'

export interface StructUser {
  name: string;
  cpf: string;
  age: Number;
  email: string;
  img: string;
  phone: string;
  birthdate: Date;
  gender: string;
  address: string;
  occupation: string;
  passwd: string;
  isAdmin: boolean;
  token: string;
  emergency_name: string;
  emergency_phone: string;
}
const options = {
  type: String,
  unique: true,
  required: true,
}

const UserSchema = new Schema<StructUser>({
  name: options,
  cpf: options,
  age: {
    Number
  },
  email: options,
  img: {
    type: String,
    default: 'https://firebasestorage.googleapis.com/v0/b/todolist-adonis.appspot.com/o/client_images%2Fdefault_user.png?alt=media&token=062a52fd-60de-4794-9d19-fb8a7b1eb24e'
  },
  passwd: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    unique: true,
  },
  birthdate: {
    type: Date,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  occupation: {
    type: String,
  },
  emergency_name:{
    type: String,
  },
  emergency_phone: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
},{ timestamps: true, autoIndex: true });

export const dataUser = model<StructUser>("Users", UserSchema)