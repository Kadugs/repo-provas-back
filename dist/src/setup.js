"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var path = '.env';
if (process.env.NODE_ENV === 'development') {
    path = '.env.dev';
}
if (process.env.NODE_ENV === 'test') {
    path = '.env.test';
}
dotenv_1["default"].config({
    path: path
});
