"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const authentication_1 = require("../middleware/authentication");
const userRouter = express_1.default.Router();
userRouter.post('/create', user_controller_1.addUser);
userRouter.get('/list', authentication_1.verifyToken, user_controller_1.listUsers);
userRouter.get('/:id', authentication_1.verifyToken, user_controller_1.getUserById);
userRouter.put('/update/:id', authentication_1.verifyTokenAuth, user_controller_1.putUser);
userRouter.delete('/:id', authentication_1.verifyTokenAuth, user_controller_1.deleteUser);
exports.default = userRouter;
