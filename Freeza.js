"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Freeza = void 0;
var Freeza = /** @class */ (function () {
    function Freeza(initialState) {
        this.transitionTo(initialState);
    }
    // Cambia de estado dinámicamente
    Freeza.prototype.transitionTo = function (state) {
        console.log("\u2192 Freezer cambia a: ".concat(state.getName()));
        this.state = state;
        this.state.setFreeza(this);
    };
    // Delegamos comportamiento al estado actual
    Freeza.prototype.attack = function () {
        this.state.attack();
    };
    Freeza.prototype.defend = function (value) {
        this.state.defend(value);
    };
    // Verificación simple
    Freeza.prototype.isAlive = function () {
        return this.state.energy > 0;
    };
    return Freeza;
}());
exports.Freeza = Freeza;
