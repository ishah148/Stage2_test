interface IApiData {
    id: number;
    name: string;
    price: number;
    color: string;
    countInCart: number;
    description: string;
}

interface IDataService {
    getData(): IApiData[];
}

interface IDataStorage {
    Allproducts: IApiData[];
    filteredProducts: IApiData[];
    cartData: IApiData[];
}

class Store {
    drowConponents(): void {
        new Search();
        new Filter();
        new Cart();
    }
    render(): void {
        // TODO update necessary components
    }
}

class Search {
    draw(): void {
        //TODO  draw search bar
    }
}

class Filter {
    draw(): void {
        //TODO  draw filter
    }
}

class Cart {
    draw(): void {
        //TODO dwar Cards
    }
}

import './scss/main.scss';
// import mockData from './assets/mockdata';

interface IData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const obj: IData = {
    id: 1,
    title: 'string',
    price: 2,
    description: 'string',
    category: 'string',
    image: 'string',
    rating: {
        rate: 3,
        count: 4,
    },
};


interface IProduct {
    id: number;
    name: string;
    price: number;
    color: string;
    description: string;
}

interface Filter {
    query: string;
    priceFrom: number;
    priceTo: number;
}

interface IProductService {
    getProducts(filter: Filter | null = null): Promise<IProduct[]>;
}

interface IApiClient {
    getProducts(): Promise<IProduct[]>;
}

interface ICart {
    getAllItems(): ICartItem[];

    add(product: IProduct): void;

    remove(product: IProduct): void;
}

interface ICartItem {
    product: IProduct;
    amount: number;
}

interface IComponent {
    render(): void;
}

class StoreComponent implements IComponent {
    private productService: IProductService;
    private cart: ICart;

    private isLoaded = false;
    private products = null;

    constructor() {
        this.load();
    }

    private async load() {
        this.products = await this.productService.getProducts();
        this.isLoaded = true;

        this.render();
    }

    renderConponents(): void {
        new Search;
        new Filter;
        new Cart;
    }

    render(): void {
        // TODO update necessary components
        renderConponents();
    }
}

class SearchComponent implements IComponent {
    render(): void {
        //TODO  draw search bar
    }
}

class FilterComponent implements IComponent {
    render(): void {
        //TODO  draw filter
    }
}

class CartComponent implements IComponent {
    private cart: ICart;

    render(): void {
        this.cart.getAllItems(); // TODO draw each item
    }
}

const x: IData[] = [obj, obj, obj, obj];

console.log(123);
// const createEl = (
//     tag: keyof HTMLElementTagNameMap,
//     cn: string[] = [],
//     at: { [key: string]: string } = {}
// ): HTMLElement => {
//     const el = document.createElement(tag);
//     el.classList.add(...cn);
//     for (const key in at) {
//         el.setAttribute(key, at[key]);
//     }
//     return el;
// };

// const addCards = (data: IData[]): void => {
//     const body = document.querySelector('.goods') as HTMLElement;

//     mockData.forEach((good: IData) => {
//         const frag = createEl('div', ['card']);
//         // const goodInfo = JSON.stringify(good);
//         for (const key in good) {
//             frag.append((createEl('div').innerHTML = `${key}: ${good[key]}`));
//         }
//         body.append(frag);
//     });
// };

// addCards(mockData);
