"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_file_node_1 = require("gatsby-source-filesystem/create-file-node");
var static_map_1 = __importDefault(require("./static-map"));
var processNodes = function (datum, _a) {
    var actions = _a.actions, createContentDigest = _a.createContentDigest, createNodeId = _a.createNodeId;
    return __awaiter(void 0, void 0, void 0, function () {
        var createNode, fileNode, nodeContent, nodeMeta, node;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    createNode = actions.createNode;
                    return [4, create_file_node_1.createFileNode(datum.absolutePath, createNodeId, {})];
                case 1:
                    fileNode = _b.sent();
                    fileNode.internal.description = "File \"Google Maps Static Image of " + datum.center + " (Hash: " + datum.hash + ")\"";
                    fileNode.hash = datum.hash;
                    fileNode.parent = datum.id;
                    return [4, createNode(__assign({}, fileNode), { name: "gatsby-source-filesystem" })];
                case 2:
                    _b.sent();
                    nodeContent = JSON.stringify(datum);
                    nodeMeta = {
                        children: [fileNode.id],
                        id: datum.id,
                        parent: undefined,
                        internal: {
                            content: nodeContent,
                            contentDigest: createContentDigest(datum),
                            type: "StaticMap",
                        },
                    };
                    node = Object.assign({}, datum, nodeMeta);
                    return [4, createNode(node)];
                case 3:
                    _b.sent();
                    return [2];
            }
        });
    });
};
var processMap = function (_a, options) { return __awaiter(void 0, void 0, void 0, function () {
    var GeneratedMap, filePath, id;
    var createNodeId = _a.createNodeId, store = _a.store, cache = _a.cache, plugingArgs = __rest(_a, ["createNodeId", "store", "cache"]);
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                GeneratedMap = new static_map_1.default(options, cache, store);
                return [4, GeneratedMap.getFilePath(options.key, options.secret)];
            case 1:
                filePath = _b.sent();
                id = createNodeId("google-maps-static-" + filePath.hash);
                return [4, processNodes(__assign(__assign({}, filePath), { id: id, mapUrl: GeneratedMap.url, nickname: options.nickname || id }), __assign(__assign({}, plugingArgs), { createNodeId: createNodeId }))];
            case 2: return [2, _b.sent()];
        }
    });
}); };
function sourceNodes(pluginArgs, config) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, map, e_1_1;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!config.key)
                        throw new Error("Must provide an API key for Google Maps Static.");
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 8]);
                    _b = __values((_a = config.maps) !== null && _a !== void 0 ? _a : [config]), _c = _b.next();
                    _e.label = 2;
                case 2:
                    if (!!_c.done) return [3, 5];
                    map = _c.value;
                    return [4, processMap(pluginArgs, __assign(__assign({}, config), map))];
                case 3:
                    _e.sent();
                    _e.label = 4;
                case 4:
                    _c = _b.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 8: return [2];
            }
        });
    });
}
exports.default = sourceNodes;
