"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUser = void 0;
const mongoose_1 = require("mongoose");
const options = {
    type: String,
    unique: true,
    required: true,
};
const UserSchema = new mongoose_1.Schema({
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
}, { timestamps: true, autoIndex: true });
exports.dataUser = (0, mongoose_1.model)("Users", UserSchema);
