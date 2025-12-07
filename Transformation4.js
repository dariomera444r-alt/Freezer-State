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
exports.Transformation4 = void 0;
var State_1 = require("./State");
var Transformation4 = /** @class */ (function (_super) {
    __extends(Transformation4, _super);
    function Transformation4() {
        var _this = _super.call(this) || this;
        _this.power = 2000000;
        _this.energy = 20;
        return _this;
    }
    Transformation4.prototype.getName = function () {
        return "Transformation4";
    };
    Transformation4.prototype.attack = function () {
        console.log("Transformation4 libera un rayo destructivo:", this.power);
    };
    Transformation4.prototype.defend = function (value) {
        this.energy -= value;
        console.log("Transformation4 recibe daño. Energía restante:", this.energy);
    };
    return Transformation4;
}(State_1.State));
exports.Transformation4 = Transformation4;
