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
exports.deleteUserByID = exports.updateUserByID = exports.getUserByEmail = exports.getUserByID = exports.getUsers = exports.createUser = void 0;
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
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.dataUser.findOne({
            "email": email
        });
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUserByEmail = getUserByEmail;
const updateUserByID = (id, data, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield user_model_1.dataUser.findByIdAndUpdate(id, data);
        user = yield user_model_1.dataUser.findById(id);
        res.status(200).send(user);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateUserByID = updateUserByID;
const deleteUserByID = (id, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.dataUser.findById(id).then((user) => __awaiter(void 0, void 0, void 0, function* () {
            if (!user)
                res.status(404).send({ message: 'Bad request, user not exists!' });
            yield user_model_1.dataUser.findByIdAndDelete(id);
            res.send({ message: 'User ' + (user === null || user === void 0 ? void 0 : user.name) + ' has deleted!' });
        })).catch((err) => {
            res.status(300).send(err);
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUserByID = deleteUserByID;
