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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getTestsById = exports.getSubjectsList = exports.getTeachersList = exports.getFormInfos = void 0;
var typeorm_1 = require("typeorm");
var SemesterEntity_1 = __importDefault(require("../entities/SemesterEntity"));
var SubjectEntity_1 = __importDefault(require("../entities/SubjectEntity"));
var TeacherEntity_1 = __importDefault(require("../entities/TeacherEntity"));
var TestCategoryEntity_1 = __importDefault(require("../entities/TestCategoryEntity"));
var TeacherSubjectsEntity_1 = __importDefault(require("../entities/TeacherSubjectsEntity"));
var PeriodEntity_1 = __importDefault(require("../entities/PeriodEntity"));
function getFormInfos() {
    return __awaiter(this, void 0, void 0, function () {
        var semesters, subjects, teachers, testCategories, teacherSubjects;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(SemesterEntity_1["default"]).find()];
                case 1:
                    semesters = _a.sent();
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(SubjectEntity_1["default"]).find()];
                case 2:
                    subjects = _a.sent();
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(TeacherEntity_1["default"]).find()];
                case 3:
                    teachers = _a.sent();
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(TestCategoryEntity_1["default"]).find()];
                case 4:
                    testCategories = _a.sent();
                    return [4 /*yield*/, (0, typeorm_1.getRepository)(TeacherSubjectsEntity_1["default"]).find()];
                case 5:
                    teacherSubjects = _a.sent();
                    return [2 /*return*/, {
                            semesters: semesters,
                            subjects: subjects,
                            teachers: teachers,
                            testCategories: testCategories,
                            teacherSubjects: teacherSubjects
                        }];
            }
        });
    });
}
exports.getFormInfos = getFormInfos;
function getTeachersList() {
    return __awaiter(this, void 0, void 0, function () {
        var tests, arrTests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(TeacherEntity_1["default"]).find({ relations: ['tests'] })];
                case 1:
                    tests = _a.sent();
                    arrTests = tests
                        .map(function (item) { return ({
                        id: item.id,
                        name: item.name,
                        testQuantity: item.tests.length
                    }); })
                        .filter(function (item) { return item.testQuantity > 0; });
                    return [2 /*return*/, arrTests];
            }
        });
    });
}
exports.getTeachersList = getTeachersList;
function getSubjectsList() {
    return __awaiter(this, void 0, void 0, function () {
        var subjects, arrSubjects;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(PeriodEntity_1["default"]).find({
                        relations: ['subjects', 'subjects.tests']
                    })];
                case 1:
                    subjects = _a.sent();
                    arrSubjects = subjects.map(function (item) { return ({
                        id: item.id,
                        period: item.period,
                        subjects: item.subjects
                            .filter(function (subject) { return subject.tests.length > 0; })
                            .map(function (subject) { return ({
                            id: subject.id,
                            subject: subject.subject
                        }); })
                    }); });
                    return [2 /*return*/, arrSubjects.filter(function (subject) { return subject.subjects.length > 0; })];
            }
        });
    });
}
exports.getSubjectsList = getSubjectsList;
function getTestsById(id, type) {
    return __awaiter(this, void 0, void 0, function () {
        var categories, arrCategories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(TestCategoryEntity_1["default"]).find({
                        relations: ['tests', 'tests.semester', 'tests.subject', 'tests.teacher']
                    })];
                case 1:
                    categories = _a.sent();
                    arrCategories = categories
                        .filter(function (category) { return category.tests.length > 0; })
                        .map(function (category) { return ({
                        id: category.id,
                        category: category.category,
                        tests: category.tests
                            .filter(function (test) {
                            // eslint-disable-next-line implicit-arrow-linebreak
                            return (type === 'teacher' && test.teacherId === id) ||
                                (type === 'subject' && test.subjectId === id);
                        })
                            .map(function (test) { return ({
                            id: test.id,
                            link: test.link,
                            semester: test.semester.semester,
                            subject: test.subject.subject,
                            teacher: test.teacher.name
                        }); })
                    }); })
                        .filter(function (item) { return item.tests.length > 0; });
                    return [2 /*return*/, arrCategories];
            }
        });
    });
}
exports.getTestsById = getTestsById;
