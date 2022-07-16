import { IProduct } from '../types/types';
import { StoreComponent } from './Store';
const st = new StoreComponent();

const data: IProduct[] = [
    {
        id: 1,
        name: 'redmi 9c',
        price: 100,
        vendor: 'xiaomi',
        color: 'red',
        description: 'lorem',
        imageSrc: './assets/redmi9c.webp',
    },
    {
        id: 2,
        name: 'good2',
        price: 20,
        vendor: 'nokia',
        color: 'blue',
        description: 'lorem',
        imageSrc: './assets/galaxya03.webp',
    },
    {
        id: 3,
        name: 'good3',
        price: 30,
        vendor: 'samsung',
        color: 'green',
        description: 'lorem',
        imageSrc: './assets/redmi9c.webp',
    },
    {
        id: 4,
        name: 'iPhone11',
        price: 30,
        vendor: 'iphone',
        color: 'white',
        description: 'lorem',
        imageSrc: './assets/iphone11.webp',
    },
    {
        id: 5,
        name: 'Apple iPhone SE',
        price: 300,
        vendor: 'iphone',
        color: 'brown',
        description: 'lorem',
        imageSrc: './assets/iphone11.webp',
    },
    {
        id: 6,
        name: 'Samsung Galaxy A03',
        price: 400,
        vendor: 'samsung',
        color: 'black',
        description: 'lorem',
        imageSrc: './assets/iphone11.webp',
    },
];

// const filtredObj = new Filter(
//     {
//         colors: ['red', 'black', 'brown'],
//         vendors: ['iphone', 'xiaomi', 'samsung'],
//         priceFrom: 50,
//         priceTo: 500,
//     },
//     data
// );

// const sortedObj = new Sort('price19', data);
