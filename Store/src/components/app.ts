import { ICart, IFilter, IProduct, SortQuery } from '../types/types';
import { StoreComponent } from './Store';
const st = new StoreComponent();

// function setLocalStorage(name: string, obj: IFilter | SortQuery | IProduct[]) {
//     localStorage.setItem(name, JSON.stringify(obj));
// }

// function getLocalStorage(name: string) {
//     if (localStorage.getItem(name)) {
//         const data = localStorage.getItem(name) || '';
//
//     }
// }

// const tempFilterQuery = {
//     color: [],
//     company: [],
//     camResolution: [],
//     priceFrom: 1,
//     priceTo: 1000,
//     yearFrom: 2010,
//     yearTo: 2022,
// };
// const tempFilterQuery2 = {
//     color: ['red'],
//     company: ['fff'],
//     camResolution: ['12'],
//     priceFrom: 1,
//     priceTo: 10,
//     yearFrom: 20,
//     yearTo: 202,
// };

// setLocalStorage('test1', tempFilterQuery);
// getLocalStorage('test1');
// setLocalStorage('test2', tempFilterQuery2);
// getLocalStorage('test2');
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
