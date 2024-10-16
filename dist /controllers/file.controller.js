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
exports.deleteFile = exports.updateFile = exports.getFilesByUser = exports.getFileId = exports.getFiles = exports.addFile = void 0;
const file_service_1 = require("../services/file.service");
const addFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const response = yield (0, file_service_1.createFile)(data, res);
    res.send(response);
});
exports.addFile = addFile;
const getFiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, file_service_1.getAllFiles)();
    res.send(data);
});
exports.getFiles = getFiles;
const getFileId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const file = yield (0, file_service_1.getFileByID)(id);
    res.send(file);
});
exports.getFileId = getFileId;
const getFilesByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //find id user of receiver 
    const id = req.params.id;
    const files = yield (0, file_service_1.getFilesByIdUser)(id);
    res.send(files);
});
exports.getFilesByUser = getFilesByUser;
const updateFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const up = yield (0, file_service_1.udpateFileByID)(id, data, res);
    res.status(202).send(up);
});
exports.updateFile = updateFile;
const deleteFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const rm = yield (0, file_service_1.deleteFileByID)(id, res);
    res.status(200).send(rm);
});
exports.deleteFile = deleteFile;
