const { add } = require('./js/mathUtils');
console.log(add(100, 200));

import { name, age } from "./js/info";



console.log(name);
console.log(age);

const css = require("./css/normal.css").toString();
console.log(css); // {String}