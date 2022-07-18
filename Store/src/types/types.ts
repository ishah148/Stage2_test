export interface IProduct {
    id: number;
    name: string;
    price: number;
    company: string;
    color: string;
    description: string;
    imageSrc: string;
    camResolution: string;
    year: number;
    onStorage: number;
}

export interface IFilter {
    color: string[];
    company: string[];
    camResolution: string[];
    priceFrom: number;
    priceTo: number;
    yearFrom: number;
    yearTo: number;
}

export interface IProductService {
    getProductsData(filter: IFilter | null): Promise<IProduct[]>;
}

export type Callbacks = {
    renderProducts?: (data: IProduct[] | null) => void;
    renderCart?: (data: IProduct[] | null) => void;
    sendFilterQuery?: (query: IFilter) => void;
};

// export type FilterComponents = {
//     [key: string]: string;
// };
// Object<string>
// export type Callback<T> = (data: T) => IProduct[];

export interface IComponent {
    render(data: IProduct[] | null): void;
}
// export interface IComponent<T> {
//     render(callback: Callback<T>): void;
// }

export interface ICart {
    getAllItems(): ICartItem[];

    add(product: IProduct): void;

    remove(product: IProduct): void;
}

export interface ICartItem {
    product: IProduct;
    amount: number;
}

export type SortQuery = {
    type: string | null;
};
