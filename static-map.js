"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_file_1 = __importDefault(require("./image-file"));
var marker_1 = __importDefault(require("./marker"));
var style_1 = __importDefault(require("./style"));
var path_1 = __importDefault(require("./path"));
var StaticMap = (function () {
    function StaticMap(options, cache, store) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.store = store;
        this.size = options.size
            ? options.size.includes("x")
                ? options.size
                : options.size + "x" + options.size
            : "640x640";
        this.markers = this.parseOption((_a = options.markers) !== null && _a !== void 0 ? _a : [], marker_1.default);
        this.paths = this.parseOption((_b = options.paths) !== null && _b !== void 0 ? _b : [], path_1.default);
        this.styles = this.parseOption((_c = options.styles) !== null && _c !== void 0 ? _c : [], style_1.default);
        this.visible = this.parseOption((_d = options.visible) !== null && _d !== void 0 ? _d : [], String);
        this.hasSecret = !!options.secret;
        this.zoom = (_e = options.zoom) !== null && _e !== void 0 ? _e : "14";
        this.format = (_f = options.format) !== null && _f !== void 0 ? _f : "png";
        this.center = (_g = options.center) !== null && _g !== void 0 ? _g : "";
        this.clientID = options.clientID;
        this.scale = options.scale;
        this.mapType = options.mapType;
        this.mapID = options.mapID;
        this.query = options.query;
        this.url = this.getPublicSearchURL();
        this.file = new image_file_1.default(cache, this.getImageJSON());
    }
    StaticMap.prototype.getFilePath = function (key, secret) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var keyOrClient, _c, path, hash;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        keyOrClient = this.clientID ? this.clientID : key;
                        return [4, ((_a = this.file) === null || _a === void 0 ? void 0 : _a.getHref(this.store, keyOrClient, secret))];
                    case 1:
                        _c = (_b = (_d.sent())) !== null && _b !== void 0 ? _b : { path: "", hash: "" }, path = _c.path, hash = _c.hash;
                        return [2, {
                                absolutePath: path,
                                center: this.isImplicit() ? "Implicit Map" : this.center,
                                hash: hash,
                            }];
                }
            });
        });
    };
    StaticMap.prototype.isImplicit = function () {
        var _a;
        return ((!this.center && !this.isEmpty((_a = this.markers) !== null && _a !== void 0 ? _a : this.paths)) ||
            !this.isEmpty(this.visible));
    };
    StaticMap.prototype.isEmpty = function (arr) {
        return arr ? !arr.length : true;
    };
    StaticMap.prototype.isCords = function () {
        return !this.query && RegExp(/^[^a-zA-Z]+$/).test(this.center);
    };
    StaticMap.prototype.getImageJSON = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            baseUrl: this.generateMapUrl(),
            clientID: (_a = this.clientID) !== null && _a !== void 0 ? _a : "",
            format: this.format,
            hasSecret: (_b = this.hasSecret) !== null && _b !== void 0 ? _b : false,
            mapType: this.mapType,
            map_id: this.mapID,
            markers: this.mapArray((_c = this.markers) !== null && _c !== void 0 ? _c : []),
            paths: this.mapArray((_d = this.paths) !== null && _d !== void 0 ? _d : []),
            scale: this.scale,
            size: this.size,
            styles: this.mapArray((_e = this.styles) !== null && _e !== void 0 ? _e : []),
            visible: this.mapArray((_f = this.visible) !== null && _f !== void 0 ? _f : []),
            zoom: this.isImplicit() ? "" : this.zoom,
        };
    };
    StaticMap.prototype.parseOption = function (options, Type) {
        return !Array.isArray(options)
            ? [new Type(options)]
            : options.map(function (option) { return new Type(option); });
    };
    StaticMap.prototype.mapArray = function (types) {
        return types.map(function (type) { return type.toString(); });
    };
    StaticMap.prototype.generateMapUrl = function () {
        return "https://www.google.com/maps/api/staticmap?" + (this.isImplicit() ? this.parseWayPoints() : "") + (this.center ? "center=" + encodeURIComponent(this.center) : "");
    };
    StaticMap.prototype.getPublicSearchURL = function () {
        var _a;
        var URLBuilder = this.isImplicit()
            ? ["dir/", this.parseWayPoints()]
            : this.isCords()
                ? ["@", "map_action=map&center=" + encodeURIComponent(this.center)]
                : ["search/", "query=" + encodeURIComponent((_a = this.query) !== null && _a !== void 0 ? _a : this.center)];
        return "https://www.google.com/maps/" + URLBuilder[0] + "?api=1&" + URLBuilder[1];
    };
    StaticMap.prototype.parseWayPoints = function () {
        return encodeURIComponent(this.getWayPoints()
            .map(function (point) { return point.toString(); })
            .reduce(function (points, point) { return points + "|" + point; }, ""));
    };
    StaticMap.prototype.getWayPoints = function () {
        var _a, _b, _c;
        return __spreadArray([], __read(((_c = (_b = (_a = this.markers) !== null && _a !== void 0 ? _a : this.visible) !== null && _b !== void 0 ? _b : this.paths) !== null && _c !== void 0 ? _c : [])));
    };
    return StaticMap;
}());
exports.default = StaticMap;
