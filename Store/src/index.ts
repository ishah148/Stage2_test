import './components/app';
// import Features from './components/controller/features';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'nouislider';
import './global.scss';
// import noUiSlider, { target } from '../../node_modules/nouislider/src/nouislider';
// import noUiSlider, { target } from '../../node_modules/nouislider/src/nouislider';
// import * as noUiSlider from '../../node_modules/nouislider/dist/nouislider.min.mjs';
// import '../../node_modules/nouislider/dist/nouislider.css';
// import noUiSlider from 'nouislider';

// import noUiSlider, { target } from 'nouislider';
import * as noUiSlider from 'nouislider';
import { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';
// import wNumb from 'wnumb';
import 'bootstrap';
import wNumb from 'wnumb';
// const range = document.getElementById('range') as target;
const slider: noUiSlider.target = document.querySelector('.DaSlidaaar') as target;
console.log(slider);

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        min: 0,
        max: 100,
    },
    format: {
        // 'to' the formatted value. Receives a number.
        to: function (value) {
            return value + ',-';
        },
        // 'from' the formatted value.
        // Receives a string, should return a number.
        from: function (value) {
            return Number(value.replace(',-', ''));
        },
    },
    tooltips: [
        wNumb({ decimals: 0 }), // tooltip with custom formatting
        wNumb({ decimals: 0 }), // tooltip with default formatting
    ],
});

// import * as data from '../products_data/product.json';

// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
