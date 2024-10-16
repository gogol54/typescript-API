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
exports.deletePub = exports.putPub = exports.getPubById = exports.getPubs = exports.addPub = void 0;
const pub_service_1 = require("../services/pub.service");
const addPub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const response = yield (0, pub_service_1.createPub)(data, res);
    res.status(201).send(response);
});
exports.addPub = addPub;
const getPubs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, pub_service_1.getPublications)();
    res.status(200).send(data);
});
exports.getPubs = getPubs;
const getPubById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const pub = yield (0, pub_service_1.getPublicationByID)(id);
    res.status(200).send(pub);
});
exports.getPubById = getPubById;
const putPub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const pub = yield (0, pub_service_1.putPublicationByID)(id, data);
    res.status(202).send(pub);
});
exports.putPub = putPub;
const deletePub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const pub = yield (0, pub_service_1.deletePublicationByID)(id, res);
    res.status(200).send(pub);
});
exports.deletePub = deletePub;
