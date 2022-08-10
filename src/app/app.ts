import { Template } from 'webpack';
import RaceApi from './api';
import { Car } from './car';
import { randomInt } from './carsModelList';
import { getGeneralHTML } from './htmlPatterns';
import RaceManager from './race';
import Race from './race';

const appEl = document.getElementById('async-race') as HTMLElement;
appEl.outerHTML = getGeneralHTML();

const race = new RaceManager();
const api = new RaceApi();
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
// api.createWinner({
//     time: randomInt(1, 33),
//     id: randomInt(1, 444),
//     wins: randomInt(1, 44),
// });
