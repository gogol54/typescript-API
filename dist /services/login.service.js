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
exports.logout = exports.loginService = void 0;
const user_service_1 = require("./user.service");
const authentication_1 = require("../middleware/authentication");
const user_service_2 = require("./user.service");
const loginService = (data, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield (0, user_service_1.getUserByEmail)(data.email);
        if (!user) {
            res.status(400).json({ error: "User not exist!" });
        }
        const verify = yield (0, authentication_1.verifyPass)(data.password, user.passwd);
        if (!verify) {
            res.status(401).json({ error: "Invalid Password!" });
        }
        const tk = (0, authentication_1.token)(user._id);
        const createTk = { token: tk };
        user = yield (0, user_service_2.updateUserByID)(user._id, createTk, res);
        res.status(200).send(user);
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginService = loginService;
const logout = () => {
};
exports.logout = logout;
