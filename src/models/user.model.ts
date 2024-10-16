import { model, Schema } from 'mongoose'

export interface StructUser {
  name: string;
  cpf: string;
  age: Number;
  email: string;
  img: string;
  passwd: string;
  isAdmin: boolean;
  token: string;
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
  isAdmin: {
    type: Boolean,
    default: false
  },
  token: {
    type: String,
    default: null
  } 

},{ timestamps: true, autoIndex: true });

export const dataUser = model<StructUser>("Users", UserSchema)