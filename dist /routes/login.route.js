"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_controller_1 = require("../controllers/login.controller");
const authentication_1 = require("../middleware/authentication");
const loginRouter = express_1.default.Router();
loginRouter.post('/login', login_controller_1.loginController);
loginRouter.post('/logout', authentication_1.verifyToken, login_controller_1.logOutController);
exports.default = loginRouter;
