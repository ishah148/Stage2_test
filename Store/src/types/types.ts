export interface IProduct {
    id: number;
    name: string;
    price: number;
    color: string;
    description: string;
}

export interface IFilter {
    query: string;
    priceFrom: number;
    priceTo: number;
}

export interface IProductService {
    getProducts(filter: IFilter | null): Promise<IProduct[]>;
}

export interface IComponent {
    render(): void;
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

