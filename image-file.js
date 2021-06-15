"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cache_file_1 = __importDefault(require("./cache-file"));
var google_sign_url_1 = __importDefault(require("./google-sign-url"));
var helpers_1 = require("./helpers");
var ImageFile = (function (_super) {
    __extends(ImageFile, _super);
    function ImageFile(cache, options) {
        var _this = _super.call(this, cache, helpers_1.stringify(options)) || this;
        _this.extension = ".png";
        _this.useSignature = false;
        _this.useClient = false;
        _this.baseURL = options.baseUrl;
        _this.useSignature = options.hasSecret;
        delete options["baseUrl"];
        var appendStr = "" + _this.parseArrayParams("markers", options.markers) + _this.parseArrayParams("visible", options.visible) + _this.parseArrayParams("style", options.styles) + _this.parseArrayParams("path", options.paths);
        _this.options = _this.generateParams(options, "", appendStr);
        _this.extension = "." + options.format;
        _this.useClient = !!options.clientID;
        return _this;
    }
    ImageFile.prototype.getHref = function (store, keyOrClient, secret) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getPath(store, this.getUrl(keyOrClient, secret), this.extension)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ImageFile.prototype.getUrl = function (keyOrClient, secret) {
        var url = this.baseURL + "&" + this.options;
        var formatted_url = this.useClient
            ? this.generateParams({ client: keyOrClient }, url)
            : this.generateParams({ key: keyOrClient }, url);
        return this.useSignature
            ? this.generateSignature(formatted_url, secret)
            : formatted_url;
    };
    ImageFile.prototype.generateSignature = function (url, secret) {
        return google_sign_url_1.default(url, secret);
    };
    ImageFile.prototype.generateParams = function (options, prependStr, appendStr) {
        return ((prependStr ? prependStr + "&" : "") +
            helpers_1.stringify(options) +
            (appendStr ? "&" + appendStr : ""));
    };
    ImageFile.prototype.parseArrayParams = function (type, options) {
        return !options
            ? ""
            : options.map(function (option) { return type + "=" + option; }).join("&");
    };
    return ImageFile;
}(cache_file_1.default));
exports.default = ImageFile;
