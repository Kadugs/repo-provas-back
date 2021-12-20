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
var PeriodEntity_1 = __importDefault(require("./PeriodEntity"));
var TestEntity_1 = __importDefault(require("./TestEntity"));
var SubjectEntity = /** @class */ (function () {
    function SubjectEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], SubjectEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SubjectEntity.prototype, "subject");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return TestEntity_1["default"]; }, function (test) { return test.subject; }),
        __metadata("design:type", TestEntity_1["default"])
    ], SubjectEntity.prototype, "test");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return TestEntity_1["default"]; }, function (test) { return test.subject; }),
        __metadata("design:type", Array)
    ], SubjectEntity.prototype, "tests");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return PeriodEntity_1["default"]; }, function (period) { return period.subjects; }),
        (0, typeorm_1.JoinColumn)({ name: 'period_id' }),
        __metadata("design:type", PeriodEntity_1["default"])
    ], SubjectEntity.prototype, "period");
    SubjectEntity = __decorate([
        (0, typeorm_1.Entity)('subjects')
    ], SubjectEntity);
    return SubjectEntity;
}());
exports["default"] = SubjectEntity;
