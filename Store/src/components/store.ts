import ProductService from '../service/ProductService';
import { IProductService, IComponent, ICart } from '../types/types';
import { CartComponent } from './cart';
import { ProductsComponent } from './product';

export class StoreComponent implements IComponent {
    // constructor() {}
    private cart!: ICart;
    private isLoaded = false;
    private service: ProductService;
    private products: ProductsComponent;
    constructor() {
        this.service = new ProductService();
        // this.products = new ProductsComponent(callback);
        this.products = new ProductsComponent();
        this.load();
        // this.getActualProducts();
        // this.productCards = new CartComponent();
    }

    render(): void {
        console.log(123);
    }
    init(): void {
        console.log('init');
    }
    async load() {
        this.init();
        debugger;
        const data = await this.service.getProducts(null);
        this.isLoaded = true;
        this.products.render(this.service.getActualProducts.bind(this));
    }

    // protected renderCart(data): void {
    //     // start rendering
    //     // this.render(this.productService.filterData(data))
    // }
    // protected renderProducts(): void {
    //     // start rendering
    //     //product
    //     //cards
    // }

    // private render(): void {
    //     // TODO update necessary components
    //     // renderConponents();
    //     new Search();
    //     new Filter();
    //     new Cart();
    // }
}
