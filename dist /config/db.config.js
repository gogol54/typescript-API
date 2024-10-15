"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const MONGODB_URL = process.env.MONGO_URL || "";
let options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    dbName: 'publication'
};
exports.db = mongoose_1.default
    .connect(MONGODB_URL, options)
    .then((res) => {
    if (res) {
        console.log('Database connected sucessfully');
    }
}).catch((err) => {
    console.log('Warning: ' + err);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
});
