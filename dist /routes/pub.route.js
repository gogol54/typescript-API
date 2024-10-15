"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pub_controller_1 = require("../controllers/pub.controller");
const pubRouter = express_1.default.Router();
pubRouter.get('/list', pub_controller_1.getPubs);
pubRouter.get('/:id', pub_controller_1.getPubById);
pubRouter.post('/create', pub_controller_1.addPub);
exports.default = pubRouter;
