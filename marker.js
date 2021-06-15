"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Marker = (function () {
    function Marker(options) {
        this.location = options.location;
        if (!options.icon) {
            this.options = this.encodeOptions(options.color, options.size, options.label);
        }
        else {
            this.options = this.encodeIcon(options.icon, options.anchor);
        }
    }
    Marker.prototype.toString = function () {
        var _a;
        return (_a = this.options) !== null && _a !== void 0 ? _a : "";
    };
    Marker.prototype.encodeOptions = function (color, size, label) {
        var _a;
        return (this.generateEncoding("color", color) +
            this.generateEncoding("size", size) +
            this.generateEncoding("label", label) +
            (!color && !size && !label ? "|" : "") +
            encodeURIComponent((_a = this.location) !== null && _a !== void 0 ? _a : ""));
    };
    Marker.prototype.encodeIcon = function (icon, anchor) {
        var _a;
        return ((anchor
            ? this.generateEncoding("anchor", anchor.replace(/ /g, ""))
            : "") +
            ("icon:" + icon + encodeURIComponent("|")) +
            encodeURIComponent((_a = this.location) !== null && _a !== void 0 ? _a : ""));
    };
    Marker.prototype.generateEncoding = function (key, value) {
        return !value
            ? ""
            : encodeURIComponent(key) + ":" + encodeURIComponent(value) + encodeURIComponent("|");
    };
    return Marker;
}());
exports.default = Marker;
