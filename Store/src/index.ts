import './components/app';
// import Features from './components/controller/features';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'nouislider';
import './global.scss';

import * as noUiSlider from 'nouislider';
import { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';

import 'bootstrap';
import wNumb from 'wnumb';
// const range = document.getElementById('range') as target;
const slider1: noUiSlider.target = document.getElementById('nouislider1') as target;
console.log(slider1);

noUiSlider.create(slider1, {
    start: [0, 1000],
    connect: true,
    range: {
        min: 0,
        max: 1000,
    },
    format: {
        to: function (value) {
            return value + ',-';
        },
        from: function (value) {
            return Number(value.replace(',-', ''));
        },
    },
    tooltips: [
        wNumb({ decimals: 0 }), // tooltip with custom formatting
        wNumb({ decimals: 0 }), // tooltip with default formatting
    ],
});

(slider1.noUiSlider as noUiSlider.API).on('change', (value, handle) => {
    console.log(
        value.map((i) => {
            if (typeof i === 'string') {
                return +i.slice(0, 4);
            }
        })
    );
});

// debugger;
// import * as data from '../products_data/product.json';

// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
