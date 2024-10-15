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
exports.getPublicationByID = exports.getPublications = exports.createPub = void 0;
const pub_model_1 = require("../models/pub.model");
const createPub = (pubBody, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPub = yield pub_model_1.dataPub.create(pubBody);
        return newPub;
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.createPub = createPub;
const getPublications = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pubs = yield pub_model_1.dataPub.find();
        return pubs;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPublications = getPublications;
const getPublicationByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pub = yield pub_model_1.dataPub.findById(id);
        return pub;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPublicationByID = getPublicationByID;
