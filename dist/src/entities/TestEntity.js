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
exports.__esModule = true;
/* eslint-disable indent */
var typeorm_1 = require("typeorm");
var SemesterEntity_1 = __importDefault(require("./SemesterEntity"));
var SubjectEntity_1 = __importDefault(require("./SubjectEntity"));
var TeacherEntity_1 = __importDefault(require("./TeacherEntity"));
var TestCategoryEntity_1 = __importDefault(require("./TestCategoryEntity"));
var TestEntity = /** @class */ (function () {
    function TestEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TestEntity.prototype, "link");
    __decorate([
        (0, typeorm_1.Column)({ name: 'semester_id' }),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "semesterId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'category_id' }),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "categoryId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'subject_id' }),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "subjectId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'teacher_id' }),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "teacherId");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return TeacherEntity_1["default"]; }, function (teacher) { return teacher.tests; }),
        (0, typeorm_1.JoinColumn)({ name: 'teacher_id' }),
        __metadata("design:type", TeacherEntity_1["default"])
    ], TestEntity.prototype, "teacher");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return TestCategoryEntity_1["default"]; }, function (teacher) { return teacher.tests; }),
        (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
        __metadata("design:type", TestCategoryEntity_1["default"])
    ], TestEntity.prototype, "category");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return SemesterEntity_1["default"]; }, function (semester) { return semester.test; }),
        (0, typeorm_1.JoinColumn)({ name: 'semester_id' }),
        __metadata("design:type", SemesterEntity_1["default"])
    ], TestEntity.prototype, "semester");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return SubjectEntity_1["default"]; }, function (subject) { return subject.test; }),
        (0, typeorm_1.JoinColumn)({ name: 'subject_id' }),
        __metadata("design:type", SubjectEntity_1["default"])
    ], TestEntity.prototype, "subject");
    TestEntity = __decorate([
        (0, typeorm_1.Entity)('tests')
    ], TestEntity);
    return TestEntity;
}());
exports["default"] = TestEntity;
