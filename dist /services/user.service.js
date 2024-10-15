"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByID = exports.getUsers = exports.createUser = void 0;
const user_model_1 = require("../models/user.model");
const createUser = (userBody, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield user_model_1.dataUser.create(userBody);
        return newUser;
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
exports.createUser = createUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.dataUser.find();
        return users;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUsers = getUsers;
const getUserByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.dataUser.findById(id);
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUserByID = getUserByID;
