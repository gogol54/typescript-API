"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataFile = void 0;
const mongoose_1 = require("mongoose");
const FileSchema = new mongoose_1.Schema({
    file: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    userID_sender: {
        type: String,
    },
    userID_receiver: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.dataFile = (0, mongoose_1.model)("Files", FileSchema);
