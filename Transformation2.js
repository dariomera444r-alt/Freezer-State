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
exports.Transformation2 = void 0;
var State_1 = require("./State");
var Transformation2 = /** @class */ (function (_super) {
    __extends(Transformation2, _super);
    function Transformation2() {
        var _this = _super.call(this) || this;
        _this.power = 850000;
        _this.energy = 10;
        return _this;
    }
    Transformation2.prototype.getName = function () {
        return "Transformation2";
    };
    Transformation2.prototype.attack = function () {
        console.log("Transformation2 ataca con fuerza aumentada:", this.power);
    };
    Transformation2.prototype.defend = function (value) {
        this.energy -= value;
        console.log("Transformation2 recibe daño. Energía restante:", this.energy);
    };
    return Transformation2;
}(State_1.State));
exports.Transformation2 = Transformation2;
