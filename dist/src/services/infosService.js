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
exports.getTestsById = exports.getSubjectsList = exports.getTeachersList = exports.getFormInfos = void 0;
const typeorm_1 = require("typeorm");
const SemesterEntity_1 = __importDefault(require("../entities/SemesterEntity"));
const SubjectEntity_1 = __importDefault(require("../entities/SubjectEntity"));
const TeacherEntity_1 = __importDefault(require("../entities/TeacherEntity"));
const TestCategoryEntity_1 = __importDefault(require("../entities/TestCategoryEntity"));
const TeacherSubjectsEntity_1 = __importDefault(require("../entities/TeacherSubjectsEntity"));
const PeriodEntity_1 = __importDefault(require("../entities/PeriodEntity"));
function getFormInfos() {
    return __awaiter(this, void 0, void 0, function* () {
        const semesters = yield (0, typeorm_1.getRepository)(SemesterEntity_1.default).find();
        const subjects = yield (0, typeorm_1.getRepository)(SubjectEntity_1.default).find();
        const teachers = yield (0, typeorm_1.getRepository)(TeacherEntity_1.default).find();
        const testCategories = yield (0, typeorm_1.getRepository)(TestCategoryEntity_1.default).find();
        const teacherSubjects = yield (0, typeorm_1.getRepository)(TeacherSubjectsEntity_1.default).find();
        return {
            semesters,
            subjects,
            teachers,
            testCategories,
            teacherSubjects,
        };
    });
}
exports.getFormInfos = getFormInfos;
function getTeachersList() {
    return __awaiter(this, void 0, void 0, function* () {
        const tests = yield (0, typeorm_1.getRepository)(TeacherEntity_1.default).find({ relations: ['tests'] });
        const arrTests = tests
            .map((item) => ({
            id: item.id,
            name: item.name,
            testQuantity: item.tests.length,
        }))
            .filter((item) => item.testQuantity > 0);
        return arrTests;
    });
}
exports.getTeachersList = getTeachersList;
function getSubjectsList() {
    return __awaiter(this, void 0, void 0, function* () {
        const subjects = yield (0, typeorm_1.getRepository)(PeriodEntity_1.default).find({
            relations: ['subjects', 'subjects.tests'],
        });
        const arrSubjects = subjects.map((item) => ({
            id: item.id,
            period: item.period,
            subjects: item.subjects
                .filter((subject) => subject.tests.length > 0)
                .map((subject) => ({
                id: subject.id,
                subject: subject.subject,
            })),
        }));
        return arrSubjects.filter((subject) => subject.subjects.length > 0);
    });
}
exports.getSubjectsList = getSubjectsList;
function getTestsById(id, type) {
    return __awaiter(this, void 0, void 0, function* () {
        const categories = yield (0, typeorm_1.getRepository)(TestCategoryEntity_1.default).find({
            relations: ['tests', 'tests.semester', 'tests.subject', 'tests.teacher'],
        });
        const arrCategories = categories
            .filter((category) => category.tests.length > 0)
            .map((category) => ({
            id: category.id,
            category: category.category,
            tests: category.tests
                .filter((test) => 
            // eslint-disable-next-line implicit-arrow-linebreak
            (type === 'teacher' && test.teacherId === id) ||
                (type === 'subject' && test.subjectId === id))
                .map((test) => ({
                id: test.id,
                link: test.link,
                semester: test.semester.semester,
                subject: test.subject.subject,
                teacher: test.teacher.name,
            })),
        }))
            .filter((item) => item.tests.length > 0);
        return arrCategories;
    });
}
exports.getTestsById = getTestsById;
