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
exports.getUserById = exports.listUsers = exports.addUser = void 0;
const user_service_1 = require("../services/user.service");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    const response = yield (0, user_service_1.createUser)(data, res);
    res.status(200).send(response);
});
exports.addUser = addUser;
const listUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, user_service_1.getUsers)();
    res.send(data);
});
exports.listUsers = listUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield (0, user_service_1.getUserByID)(id);
    res.send(user);
});
exports.getUserById = getUserById;
