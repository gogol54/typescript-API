"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pub_route_1 = __importDefault(require("./pub.route"));
const user_route_1 = __importDefault(require("./user.route"));
const file_route_1 = __importDefault(require("./file.route"));
const login_route_1 = __importDefault(require("./login.route"));
const router = (0, express_1.Router)();
const routes = [
    {
        path: '/',
        router: login_route_1.default
    },
    {
        path: '/pub',
        router: pub_route_1.default
    },
    {
        path: '/user',
        router: user_route_1.default
    },
    {
        path: '/file',
        router: file_route_1.default
    }
];
routes.forEach((route) => {
    router.use(route.path, route.router);
});
exports.default = router;
