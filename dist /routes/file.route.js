"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_controller_1 = require("../controllers/file.controller");
const fileRouter = express_1.default.Router();
fileRouter.post('/create', file_controller_1.addFile);
fileRouter.get('/files', file_controller_1.getFiles);
fileRouter.get('/:id', file_controller_1.getFileId);
fileRouter.get('list/:id', file_controller_1.getFilesByUser);
exports.default = fileRouter;
