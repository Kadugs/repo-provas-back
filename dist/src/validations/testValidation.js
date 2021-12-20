"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable newline-per-chained-call */
const joi_1 = __importDefault(require("joi"));
function testValidation(object) {
    // prettier-ignore
    // eslint-disable-next-line no-useless-escape
    const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const testSchema = joi_1.default.object({
        link: joi_1.default.string().min(5).max(765).regex(regex).required(),
        semesterId: joi_1.default.number().min(1).required(),
        categoryId: joi_1.default.number().min(1).required(),
        subjectId: joi_1.default.number().min(1).required(),
        teacherId: joi_1.default.number().min(1).required(),
    });
    const { error } = testSchema.validate(object);
    return !joi_1.default.isError(error);
}
exports.default = testValidation;
