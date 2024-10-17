"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pub_controller_1 = require("../controllers/pub.controller");
const authentication_1 = require("../middleware/authentication");
const pubRouter = express_1.default.Router();
//OK 
pubRouter.post('/create', authentication_1.verifyToken, pub_controller_1.addPub);
pubRouter.get('/list', authentication_1.verifyToken, pub_controller_1.getPubs);
pubRouter.get('/:id', authentication_1.verifyToken, pub_controller_1.getPubById);
pubRouter.put('/update/:id', authentication_1.verifyTokenAuthPub, pub_controller_1.putPub);
pubRouter.delete('/:id', authentication_1.verifyTokenAuthPub, pub_controller_1.deletePub);
exports.default = pubRouter;
