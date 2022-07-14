export interface IProduct {
    id: number;
    name: string;
    price: number;
    color: string;
    description: string;
    imageSrc: string;
}

export interface IFilter {
    query: string;
    priceFrom: number;
    priceTo: number;
}

export interface IProductService {
    getProducts(filter: IFilter | null): Promise<IProduct[]>;
}

// export type Callback<T> = (data: T) => IProduct[];

export interface IComponent {
    render(callback: () => IProduct[]): void;
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
