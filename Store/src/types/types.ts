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
    getProducts(filter: Filter | null): Promise<IProduct[]>;
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
