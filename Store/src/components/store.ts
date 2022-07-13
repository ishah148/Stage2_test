import ProductService from '../service/ProductService';
import { IProductService, IComponent, ICart } from '../types/types';
import { CartComponent } from './cart';

export class StoreComponent implements IComponent {
    // constructor() {}
    private cart!: ICart;
    private productCards!: CartComponent;
    private isLoaded = false;
    private products = null;
    private service: ProductService;
    constructor() {
        this.service = new ProductService();
        // this.load();
        // this.productCards = new CartComponent();
    }

    render(): void {
        console.log(123);
    }
    init(): void {
        console.log(this.service.getProducts(null));
    }
    // private async load() {
    //     this.products = await this.productService.getProducts();
    //     this.isLoaded = true;

    //     this.render();
    // }

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
