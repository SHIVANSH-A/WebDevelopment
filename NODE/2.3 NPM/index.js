// var generateName = require("sillyname");
import generateName from "sillyname";
import {randomSuperhero} from "superheroes";

var sillyName  = generateName();
var superName  = randomSuperhero();

console.log("Your Name : " + sillyName);
console.log("Your SuperName : " + superName);
