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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldenFreezer = void 0;
var State_1 = require("./State");
var GoldenFreezer = /** @class */ (function (_super) {
    __extends(GoldenFreezer, _super);
    function GoldenFreezer() {
        var _this = _super.call(this) || this;
        _this.power = 5000000;
        _this.energy = 30;
        return _this;
    }
    GoldenFreezer.prototype.getName = function () {
        return "GoldenFreezer";
    };
    GoldenFreezer.prototype.attack = function () {
        console.log("Golden Freezer ataca con poder dorado supremo:", this.power);
    };
    GoldenFreezer.prototype.defend = function (value) {
        this.energy -= value;
        console.log("Golden Freezer recibe daño. Energía restante:", this.energy);
    };
    return GoldenFreezer;
}(State_1.State));
exports.GoldenFreezer = GoldenFreezer;
