const { add } = require('./js/mathUtils');
console.log(add(100, 200));

import { name, age } from "./js/info";



console.log(name);
console.log(age);

import { body } from "./css/normal.css";
import { less } from "./css/special.less";

import Vue from 'vue';

import App from './vue/App';

new Vue({
    el: "#app",
    template: `<App></App>`,
    components: {
        App: App,
    }
})