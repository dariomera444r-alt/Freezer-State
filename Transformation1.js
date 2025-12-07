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
exports.Transformation1 = void 0;
var State_1 = require("./State");
var Transformation1 = /** @class */ (function (_super) {
    __extends(Transformation1, _super);
    function Transformation1() {
        var _this = _super.call(this) || this;
        _this.power = 530000;
        _this.energy = 5;
        return _this;
    }
    // 👉 Agregado
    Transformation1.prototype.getName = function () {
        return "Transformation1";
    };
    Transformation1.prototype.attack = function () {
        console.log("Transformation1 ataca con poder básico:", this.power);
    };
    Transformation1.prototype.defend = function (value) {
        this.energy -= value;
        console.log("Transformation1 recibe daño. Energía restante:", this.energy);
    };
    return Transformation1;
}(State_1.State));
exports.Transformation1 = Transformation1;
