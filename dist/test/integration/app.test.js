"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
/* eslint-disable no-undef */
const supertest_1 = __importDefault(require("supertest"));
const faker_1 = __importDefault(require("faker"));
const typeorm_1 = require("typeorm");
const app_1 = __importStar(require("../../src/app"));
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, app_1.init)();
}));
describe('POST /tests', () => {
    it('should return 400 for invalid params', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post('/tests');
        expect(result.status).toBe(400);
    }));
    it('should return 201 for valid params', () => __awaiter(void 0, void 0, void 0, function* () {
        const body = {
            link: faker_1.default.internet.url(),
            semesterId: 1,
            categoryId: 1,
            subjectId: 1,
            teacherId: 1,
        };
        const result = yield (0, supertest_1.default)(app_1.default).post('/tests').send(body);
        expect(result.status).toBe(201);
    }));
});
describe('GET /infos', () => {
    it('should return 200 for valid params', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).get('/infos');
        expect(result.status).toBe(200);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.getConnection)().close();
}));
