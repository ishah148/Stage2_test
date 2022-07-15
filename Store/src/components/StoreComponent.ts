import ProductService from '../service/ProductService';
import { IProductService, IComponent, ICart, IProduct } from '../types/types';
import { CartComponent } from './cart';
import { ProductsComponent } from './ProductsComponent';

export class StoreComponent implements IComponent {
    // constructor() {}
    private cart!: ICart;
    private isLoaded = false;
    private service: ProductService;
    private products: ProductsComponent;
    constructor() {
        this.service = new ProductService(() => {
            return this.products.render();
        });
        this.products = new ProductsComponent(() => this.service.getActualProducts());
        this.load();
    }

    render(): void {
        console.log(123);
    }
    init(): void {
        console.log('init');
    }
    async load() {
        this.init();
        const data = await this.service.getProducts(null);
        this.isLoaded = true;
        this.service.renderProducts();
    }

    test() {
        console.log('StoreComp');
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
