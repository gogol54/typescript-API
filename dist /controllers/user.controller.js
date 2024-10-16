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
exports.deleteUser = exports.putUser = exports.getUserById = exports.listUsers = exports.addUser = void 0;
const user_service_1 = require("../services/user.service");
const authentication_1 = require("../middleware/authentication");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    let passwd = req.body.passwd;
    const pwd = (0, authentication_1.encryptHashing)(passwd);
    data.passwd = pwd;
    const response = yield (0, user_service_1.createUser)(data, res);
    res.status(200).send(response);
});
exports.addUser = addUser;
const listUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, user_service_1.getUsers)();
    res.status(200).send(data);
});
exports.listUsers = listUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, user_service_1.getUserByID)(id);
    res.status(200).send(user);
});
exports.getUserById = getUserById;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    if (req.body.passwd) {
        let passwd = req.body.passwd;
        const pwd = (0, authentication_1.encryptHashing)(passwd);
        data.passwd = pwd;
    }
    const user = yield (0, user_service_1.updateUserByID)(id, data, res);
    res.status(202).send(user);
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, user_service_1.deleteUserByID)(id, res);
    res.status(200).send(user);
});
exports.deleteUser = deleteUser;
