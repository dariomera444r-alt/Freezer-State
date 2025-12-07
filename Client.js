"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Freeza_1 = require("./Freeza");
var Transformation1_1 = require("./Transformation1");
var Transformation2_1 = require("./Transformation2");
var Transformation3_1 = require("./Transformation3");
var Transformation4_1 = require("./Transformation4");
var GoldenFreezer_1 = require("./GoldenFreezer");
// Inicializamos a Freezer en la primera transformación
var freeza = new Freeza_1.Freeza(new Transformation1_1.Transformation1());
freeza.attack();
freeza.defend(2);
// Cambiamos de estado dinámicamente
freeza.transitionTo(new Transformation2_1.Transformation2());
freeza.attack();
freeza.transitionTo(new Transformation3_1.Transformation3());
freeza.defend(5);
freeza.transitionTo(new Transformation4_1.Transformation4());
freeza.attack();
freeza.transitionTo(new GoldenFreezer_1.GoldenFreezer());
freeza.attack();
freeza.defend(10);
