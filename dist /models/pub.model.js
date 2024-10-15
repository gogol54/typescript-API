"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataPub = void 0;
const mongoose_1 = require("mongoose");
const options = {
    type: String,
    required: true
};
const PubSchema = new mongoose_1.Schema({
    title: options,
    description: options,
    author: options,
    isPublish: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });
exports.dataPub = (0, mongoose_1.model)("Pubs", PubSchema);
