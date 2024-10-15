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
exports.getFilesByIdUser = exports.getFileByID = exports.getAllFiles = exports.createFile = void 0;
const file_model_1 = require("../models/file.model");
const createFile = (fileBody, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newFile = yield file_model_1.dataFile.create(fileBody);
        return newFile;
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createFile = createFile;
const getAllFiles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield file_model_1.dataFile.find();
        return files;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllFiles = getAllFiles;
const getFileByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = yield file_model_1.dataFile.findById(id);
        return file;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getFileByID = getFileByID;
//this function need change on data identificator 
const getFilesByIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield file_model_1.dataFile.find({
            "userID_receiver": id
        });
        return files;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getFilesByIdUser = getFilesByIdUser;
