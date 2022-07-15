import ProductService from '../service/ProductService';
import { IProductService, IComponent, ICart, IProduct } from '../types/types';
import { CartComponent } from './cart';
import { ProductsComponent } from './ProductsComponent';
import SearchComponent from './SearchComponent';

export class StoreComponent implements IComponent {
    // constructor() {}
    private cart!: ICart;
    private isLoaded = false;
    private service: ProductService;
    private products: ProductsComponent;
    search!: SearchComponent;
    constructor() {
        this.service = new ProductService(() => {
            return this.products.render();
        });
        this.products = new ProductsComponent(() => this.service.getActualProducts());
        this.load();
        this.render();
    }

    async load() {
        this.init();
        const data = await this.service.getProducts(null);
        this.isLoaded = true;
        this.service.renderProducts();
    }
    render(): void {
        // console.log('render');
        const callback = this.service.searchProducts.bind(this.service);
        this.search = new SearchComponent(callback);
    }
    init(): void {
        // console.log('init');
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
