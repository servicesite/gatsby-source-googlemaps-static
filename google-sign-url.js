"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = __importDefault(require("url"));
var crypto_1 = __importDefault(require("crypto"));
function removeWebSafe(safeEncodedString) {
    return safeEncodedString.replace(/-/g, "+").replace(/_/g, "/");
}
function makeWebSafe(encodedString) {
    return encodedString.replace(/\+/g, "-").replace(/\//g, "_");
}
function decodeBase64Hash(code) {
    return Buffer.from(code, "base64");
}
function encodeBase64Hash(key, data) {
    return crypto_1.default.createHmac("sha1", key).update(data).digest("base64");
}
function sign(path, secret) {
    var uri = url_1.default.parse(path);
    var safeSecret = decodeBase64Hash(removeWebSafe(secret));
    var hashedSignature = makeWebSafe(encodeBase64Hash(safeSecret, uri === null || uri === void 0 ? void 0 : uri.path));
    return url_1.default.format(uri) + "&signature=" + hashedSignature;
}
exports.default = sign;
