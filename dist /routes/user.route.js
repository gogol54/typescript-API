"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.post('/create', user_controller_1.addUser);
userRouter.get('/list', user_controller_1.listUsers);
userRouter.get('/:id', user_controller_1.getUserById);
exports.default = userRouter;