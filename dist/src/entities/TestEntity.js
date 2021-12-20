"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
const typeorm_1 = require("typeorm");
const SemesterEntity_1 = __importDefault(require("./SemesterEntity"));
const SubjectEntity_1 = __importDefault(require("./SubjectEntity"));
const TeacherEntity_1 = __importDefault(require("./TeacherEntity"));
const TestCategoryEntity_1 = __importDefault(require("./TestCategoryEntity"));
let TestEntity = class TestEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TestEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TestEntity.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'semester_id' }),
    __metadata("design:type", Number)
], TestEntity.prototype, "semesterId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_id' }),
    __metadata("design:type", Number)
], TestEntity.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'subject_id' }),
    __metadata("design:type", Number)
], TestEntity.prototype, "subjectId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'teacher_id' }),
    __metadata("design:type", Number)
], TestEntity.prototype, "teacherId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TeacherEntity_1.default, (teacher) => teacher.tests),
    (0, typeorm_1.JoinColumn)({ name: 'teacher_id' }),
    __metadata("design:type", TeacherEntity_1.default)
], TestEntity.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TestCategoryEntity_1.default, (teacher) => teacher.tests),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", TestCategoryEntity_1.default)
], TestEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SemesterEntity_1.default, (semester) => semester.test),
    (0, typeorm_1.JoinColumn)({ name: 'semester_id' }),
    __metadata("design:type", SemesterEntity_1.default)
], TestEntity.prototype, "semester", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SubjectEntity_1.default, (subject) => subject.test),
    (0, typeorm_1.JoinColumn)({ name: 'subject_id' }),
    __metadata("design:type", SubjectEntity_1.default)
], TestEntity.prototype, "subject", void 0);
TestEntity = __decorate([
    (0, typeorm_1.Entity)('tests')
], TestEntity);
exports.default = TestEntity;
