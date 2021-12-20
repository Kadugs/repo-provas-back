"use strict";
exports.__esModule = true;
exports.HttpStatusText = exports.HttpStatusCode = void 0;
/* eslint-disable no-unused-vars */ /* eslint-disable no-shadow */
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["CONFLICT"] = 403] = "CONFLICT";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["DATABASE_ERROR"] = 500] = "DATABASE_ERROR";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
var HttpStatusText;
(function (HttpStatusText) {
    HttpStatusText["OK"] = "Ok";
    HttpStatusText["CREATED"] = "Created";
    HttpStatusText["FORBIDDEN"] = "Forbidden";
    HttpStatusText["BAD_REQUEST"] = "Bad Request";
    HttpStatusText["CONFLICT"] = "Conflict";
    HttpStatusText["NOT_FOUND"] = "Not Found";
    HttpStatusText["DATABASE_ERROR"] = "Database Error";
})(HttpStatusText = exports.HttpStatusText || (exports.HttpStatusText = {}));
