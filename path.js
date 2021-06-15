"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Path = (function () {
    function Path(options) {
        this.weight = options.weight;
        this.color = options.color;
        this.fillColor = options.fillColor;
        this.geoDesic = !!options.geoDesic;
        this.points = options.points.map(function (point) { return encodeURIComponent(point); });
    }
    Path.prototype.toString = function () {
        return this.generateParams();
    };
    Path.prototype.newOption = function (key, value) {
        return value ? key + ":" + value + encodeURIComponent("|") : "";
    };
    Path.prototype.generateParams = function () {
        return (this.newOption("weight", this.weight) +
            this.newOption("color", this.color) +
            this.newOption("fillcolor", this.fillColor) +
            this.newOption("geodesic", this.geoDesic) +
            this.points.join(encodeURIComponent("|")));
    };
    return Path;
}());
exports.default = Path;
