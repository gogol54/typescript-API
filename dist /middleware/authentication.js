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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenAdmin = exports.verifyTokenAuthPub = exports.verifyTokenAuth = exports.verifyTokenIsReceiver = exports.verifyToken = exports.verifyPass = exports.encryptHashing = exports.token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_service_1 = require("../services/user.service");
const pub_service_1 = require("../services/pub.service");
const file_service_1 = require("../services/file.service");
const token = (data) => {
    return jsonwebtoken_1.default.sign({
        id: data
    }, process.env.JWT_KEY, { expiresIn: '2 days' });
};
exports.token = token;
const encryptHashing = (password) => {
    return bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(10), process.env);
};
exports.encryptHashing = encryptHashing;
const verifyPass = (password, localPassword) => __awaiter(void 0, void 0, void 0, function* () {
    let validate = bcrypt_1.default.compareSync(password, localPassword);
    return validate;
});
exports.verifyPass = verifyPass;
const verifyToken = (req, res, next) => {
    let authHeader = req.headers.authorization ? req.headers.authorization : '';
    authHeader = authHeader.replace('Bearer ', '');
    let aux = jsonwebtoken_1.default.verify(authHeader, process.env.JWT_KEY);
    if (authHeader && authHeader != undefined) {
        jsonwebtoken_1.default.verify(authHeader, process.env.JWT_KEY, (err, user) => {
            if (err) {
                res.status(403).json("Token is not valid!");
            }
            else {
                req.user = user;
                next();
            }
        });
    }
    else {
        return res.status(401).json("You are not authenticated!");
    }
};
exports.verifyToken = verifyToken;
const verifyTokenIsReceiver = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let isReceiver = yield (0, file_service_1.getFileByID)(req.params.id);
    let authHeader = req.headers.authorization;
    authHeader = authHeader === null || authHeader === void 0 ? void 0 : authHeader.replace('Bearer ', '');
    let decoded = jsonwebtoken_1.default.verify(authHeader, process.env.JWT_KEY);
    let user = yield (0, user_service_1.getUserByID)(decoded.id);
    if (isReceiver.userID_receiver === decoded.id || (user === null || user === void 0 ? void 0 : user.isAdmin)) {
        (0, exports.verifyToken)(req, res, () => {
            next();
        });
    }
    else {
        return res.status(403).json("You not allowed to that!");
    }
});
exports.verifyTokenIsReceiver = verifyTokenIsReceiver;
const verifyTokenAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let isCurrent = yield (0, user_service_1.getUserByID)(req.params.id);
    let authHeader = req.headers.authorization;
    authHeader = authHeader === null || authHeader === void 0 ? void 0 : authHeader.replace('Bearer ', '');
    let decoded = jsonwebtoken_1.default.verify(authHeader, process.env.JWT_KEY);
    let user = yield (0, user_service_1.getUserByID)(decoded.id);
    if (req.params.id === decoded.id || (user === null || user === void 0 ? void 0 : user.isAdmin)) {
        (0, exports.verifyToken)(req, res, () => {
            next();
        });
    }
    else {
        return res.status(403).json("You not allowed to that!");
    }
});
exports.verifyTokenAuth = verifyTokenAuth;
const verifyTokenAuthPub = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let isAuthor = yield (0, pub_service_1.getPublicationByID)(req.params.id);
    let authHeader = req.headers.authorization;
    authHeader = authHeader === null || authHeader === void 0 ? void 0 : authHeader.replace('Bearer ', '');
    let decoded = jsonwebtoken_1.default.verify(authHeader, process.env.JWT_KEY);
    let user = yield (0, user_service_1.getUserByID)(decoded.id);
    if (!isAuthor) {
        return res.status(403).json("This publication has been deleted!");
    }
    if (isAuthor.author === decoded.id || user.isAdmin) {
        (0, exports.verifyToken)(req, res, () => {
            next();
        });
    }
    else {
        return res.status(403).json("You not allowed to that!");
    }
});
exports.verifyTokenAuthPub = verifyTokenAuthPub;
const verifyTokenAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let authHeader = req.headers.authorization;
    authHeader = authHeader === null || authHeader === void 0 ? void 0 : authHeader.replace('Bearer ', '');
    let decoded = jsonwebtoken_1.default.verify(authHeader, process.env.JWT_KEY);
    let user = yield (0, user_service_1.getUserByID)(decoded.id);
    (0, exports.verifyToken)(req, res, () => {
        if (user.isAdmin) {
            next();
        }
        else {
            res.status(403).json({ message: "You are not alowed to do that! Just ADMIN accounts have permissions!" });
        }
    });
});
exports.verifyTokenAdmin = verifyTokenAdmin;
