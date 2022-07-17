export interface IProduct {
    id: number;
    name: string;
    price: number;
    vendor: string;
    color: string;
    description: string;
    imageSrc: string;
}

export interface IFilter {
    colors: string[];
    vendors: string[];
    priceFrom: number;
    priceTo: number;
}

export interface IProductService {
    getProductsData(filter: IFilter | null): Promise<IProduct[]>;
}

export type Callbacks = {
    renderProducts?: (data: IProduct[] | null) => void;
    renderCart?: (data: IProduct[] | null) => void;
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
// }
//     // plug from promise to []
//     // if(!filter){
//     //  await render(AllProductFromJSON)
//     //}else{
//     //await render(FilteredProducts)
//     // }
//     // render(getProducts())
// }

// interface IApiClient {
//     getProducts(): Promise<IProduct[]>;
// }

// interface ICart {
//     getAllItems(): ICartItem[];

//     add(product: IProduct): void;

//     remove(product: IProduct): void;
// }

// interface ICartItem {
//     product: IProduct;
//     amount: number;
// }
