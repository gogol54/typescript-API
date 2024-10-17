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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOutController = exports.loginController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login_service_1 = require("../services/login.service");
const user_service_1 = require("../services/user.service");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const response = yield (0, login_service_1.loginService)(data, res);
    res.status(201).send(response);
});
exports.loginController = loginController;
const logOutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let authHeader = req.headers.authorization;
    authHeader = authHeader === null || authHeader === void 0 ? void 0 : authHeader.replace('Bearer ', '');
    let decoded = jsonwebtoken_1.default.verify(authHeader, process.env.JWT_KEY);
    let atl = { token: null };
    let user = yield (0, user_service_1.getUserByID)(decoded.id);
    user = yield (0, user_service_1.updateUserByID)(decoded.id, atl, res);
    res.status(201).send(user);
});
exports.logOutController = logOutController;
