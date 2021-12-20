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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubjectTests = exports.getSubjectsList = exports.getTeacherTests = exports.getTeachersList = exports.getFormInfos = void 0;
const infosService = __importStar(require("../services/infosService"));
function getFormInfos(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const infos = yield infosService.getFormInfos();
            return res.send(infos);
        }
        catch (error) {
            return next(error);
        }
    });
}
exports.getFormInfos = getFormInfos;
function getTeachersList(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teacherTests = yield infosService.getTeachersList();
            return res.send(teacherTests);
        }
        catch (err) {
            return next(err);
        }
    });
}
exports.getTeachersList = getTeachersList;
function getTeacherTests(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (Number(id) < 1) {
            return res.sendStatus(400);
        }
        try {
            const teacherTests = yield infosService.getTestsById(Number(id), 'teacher');
            return res.send(teacherTests);
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                return res.sendStatus(404);
            }
            return next(error);
        }
    });
}
exports.getTeacherTests = getTeacherTests;
function getSubjectsList(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const subjectTests = yield infosService.getSubjectsList();
            return res.send(subjectTests);
        }
        catch (error) {
            return next(error);
        }
    });
}
exports.getSubjectsList = getSubjectsList;
function getSubjectTests(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (Number(id) < 1) {
            return res.sendStatus(400);
        }
        try {
            const subjectTests = yield infosService.getTestsById(Number(id), 'subject');
            return res.send(subjectTests);
        }
        catch (error) {
            if (error.name === 'NotFoundError') {
                return res.sendStatus(404);
            }
            return next(error);
        }
    });
}
exports.getSubjectTests = getSubjectTests;
