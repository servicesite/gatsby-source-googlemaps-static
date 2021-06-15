"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Style = (function () {
    function Style(options) {
        this.feature = options.feature;
        this.element = options.element;
        this.rules = Object.entries(options.rules).map(function (kv) {
            return kv.join(":");
        });
    }
    Style.prototype.toString = function () {
        return this.generateParams();
    };
    Style.prototype.newOption = function (key, value) {
        return value ? key + ":" + value + encodeURIComponent("|") : "";
    };
    Style.prototype.generateParams = function () {
        var _a;
        var ruleStr = ((_a = this.rules) === null || _a === void 0 ? void 0 : _a.length)
            ? this.rules.reduce(function (acc, cur) { return "" + acc + encodeURIComponent("|") + cur; })
            : "";
        return (this.newOption("feature", this.feature) +
            this.newOption("element", this.element) +
            ruleStr);
    };
    return Style;
}());
exports.default = Style;
