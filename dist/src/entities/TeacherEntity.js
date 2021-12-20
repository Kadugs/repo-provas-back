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
var TestEntity_1 = __importDefault(require("./TestEntity"));
var TeacherEntity = /** @class */ (function () {
    function TeacherEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], TeacherEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TeacherEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return TestEntity_1["default"]; }, function (test) { return test.teacher; }),
        __metadata("design:type", Array)
    ], TeacherEntity.prototype, "tests");
    TeacherEntity = __decorate([
        (0, typeorm_1.Entity)('teachers')
    ], TeacherEntity);
    return TeacherEntity;
}());
exports["default"] = TeacherEntity;
