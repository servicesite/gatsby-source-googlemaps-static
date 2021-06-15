"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureWriteFile = exports.ensureFilePath = exports.fetch = exports.responseHandler = exports.stringify = exports.strictEncode = void 0;
var https_1 = __importDefault(require("https"));
var fs_1 = __importDefault(require("fs"));
function strictEncode(string) {
    return encodeURIComponent(string).replace(/[!'()*]/g, function (x) { return "%" + x.charCodeAt(0).toString(16).toUpperCase(); });
}
exports.strictEncode = strictEncode;
function stringify(options) {
    return Object.keys(options)
        .filter(function (key) { return !!options[key] || typeof options[key] !== "string"; })
        .map(function (key) { return strictEncode(key) + "=" + strictEncode(options[key]); })
        .join("&");
}
exports.stringify = stringify;
function responseHandler(response, callback) {
    var data = [];
    response.on("data", function (chunk) { return data.push(chunk); });
    response.on("end", function () { return callback(Buffer.concat(data)); });
}
exports.responseHandler = responseHandler;
function fetch(url) {
    return new Promise(function (resolve) {
        https_1.default.get(url, function (response) { return responseHandler(response, resolve); });
    });
}
exports.fetch = fetch;
function ensureFilePath(path) {
    fs_1.default.mkdirSync(path, { mode: 511, recursive: true });
}
exports.ensureFilePath = ensureFilePath;
function ensureWriteFile(path, filename, data) {
    return new Promise(function (resolve) {
        ensureFilePath(path);
        fs_1.default.writeFileSync(filename, Buffer.from(data), {});
        resolve(filename);
    });
}
exports.ensureWriteFile = ensureWriteFile;
