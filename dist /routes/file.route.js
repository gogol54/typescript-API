"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_controller_1 = require("../controllers/file.controller");
const authentication_1 = require("../middleware/authentication");
const fileRouter = express_1.default.Router();
fileRouter.post('/create', authentication_1.verifyTokenAdmin, file_controller_1.addFile);
fileRouter.get('/files', authentication_1.verifyTokenAdmin, file_controller_1.getFiles);
fileRouter.get('/:id', authentication_1.verifyTokenIsReceiver, file_controller_1.getFileId);
fileRouter.get('/list/:id', authentication_1.verifyTokenAuth, file_controller_1.getFilesByUser);
fileRouter.put('/update/:id', authentication_1.verifyTokenAdmin, file_controller_1.updateFile);
fileRouter.delete('/:id', authentication_1.verifyTokenAdmin, file_controller_1.deleteFile);
exports.default = fileRouter;
