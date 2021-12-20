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
const TestEntity_1 = __importDefault(require("./TestEntity"));
let TestCategoryEntity = class TestCategoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TestCategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TestCategoryEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TestEntity_1.default, (test) => test.category, { eager: true }),
    __metadata("design:type", Array)
], TestCategoryEntity.prototype, "tests", void 0);
TestCategoryEntity = __decorate([
    (0, typeorm_1.Entity)('test_categories')
], TestCategoryEntity);
exports.default = TestCategoryEntity;
