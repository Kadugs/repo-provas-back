"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable newline-per-chained-call */
var joi_1 = __importDefault(require("joi"));
function testValidation(object) {
    // prettier-ignore
    // eslint-disable-next-line no-useless-escape
    var regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    var testSchema = joi_1["default"].object({
        link: joi_1["default"].string().min(5).max(765).regex(regex).required(),
        semesterId: joi_1["default"].number().min(1).required(),
        categoryId: joi_1["default"].number().min(1).required(),
        subjectId: joi_1["default"].number().min(1).required(),
        teacherId: joi_1["default"].number().min(1).required()
    });
    var error = testSchema.validate(object).error;
    return !joi_1["default"].isError(error);
}
exports["default"] = testValidation;
