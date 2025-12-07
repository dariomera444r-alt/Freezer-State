"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setFreeza = function (freeza) {
        this.freeza = freeza;
    };
    State.prototype.getEnergy = function () {
        return this.energy;
    };
    return State;
}());
exports.State = State;
