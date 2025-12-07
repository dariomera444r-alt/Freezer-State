import { Freeza } from "./Freeza";
import { Transformation1 } from "./Transformation1";
import { Transformation2 } from "./Transformation2";
import { Transformation3 } from "./Transformation3";
import { Transformation4 } from "./Transformation4";
import { GoldenFreezer } from "./GoldenFreezer";

// Inicializamos a Freezer en la primera transformación
const freeza = new Freeza(new Transformation1());

freeza.attack();
freeza.defend(2);

// Cambiamos de estado dinámicamente
freeza.transitionTo(new Transformation2());
freeza.attack();

freeza.transitionTo(new Transformation3());
freeza.defend(5);

freeza.transitionTo(new Transformation4());
freeza.attack();

freeza.transitionTo(new GoldenFreezer());
freeza.attack();
freeza.defend(10);
