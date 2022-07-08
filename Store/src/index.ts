// import App from './components/app/app';
// import Features from './components/controller/features';
import './global.scss';
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
type IData = {
    id: number;
    price: number;
};

const obj: IData = {
    id: 1,
    price: 2,
};

for (const i in obj) {
    console.log(i);
    console.log(obj[i as keyof typeof obj]);
}
// console.log(obj['id']);
// import { Tooltip, Toast, Popover } from 'boo';
// const app = new App();
// app.start();
// const features = new Features();
// features.init();
