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
// const range = document.getElementById('range') as target;
const slider: noUiSlider.target = document.querySelector('.DaSlidaaar') as target;
console.log(slider);

// noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//         min: 0,
//         max: 100,
//     },
//     tooltips: [
//         false, // no tooltip
//         wNumb({ decimals: 1 }), // tooltip with custom formatting
//         true, // tooltip with default formatting
//     ],
// });

// import * as data from '../products_data/product.json';

// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
// interface IData {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
// }

// const obj: IData = {
//     id: 1,
//     title: 'string',
//     price: 2,
//     description: 'string',
//     category: 'string',
//     image: 'string',
//     rating: {
//         rate: 3,
//         count: 4,
//     },
// };
// type IData = {
//     id: number;
//     price: number;
// };

// const obj: IData = {
//     id: 1,
//     price: 2,
// };

// for (const i in obj) {
//     console.log(i);
//     console.log(obj[i as keyof typeof obj]);
// }
// console.log(obj['id']);
// import { Tooltip, Toast, Popover } from 'boo';
// const app = new App();
// app.start();
// const features = new Features();
// features.init();
