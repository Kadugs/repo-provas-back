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
exports.init = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./database"));
const testsRoute_1 = __importDefault(require("./routes/testsRoute"));
const infosRoute_1 = __importDefault(require("./routes/infosRoute"));
const ServerMiddlewareError_1 = __importDefault(require("./errors/ServerMiddlewareError"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(testsRoute_1.default);
app.use(infosRoute_1.default);
app.use(ServerMiddlewareError_1.default);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, database_1.default)();
    });
}
exports.init = init;
exports.default = app;
