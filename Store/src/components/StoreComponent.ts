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
        this.products = new ProductsComponent();
        // this.service = new ProductService(() => this.products.render(() => this.service.getActualProducts()));
        // this.products = new ProductsComponent(callback);
        this.service = new ProductService(() => {
            return this.products.test();
        });
        //! this.service = new ProductService(() => {
        //!     return this.products.render(??????);
        //! });
        // this.service = new ProductService(() => {
        //     return this.products.render.bind(this.products);
        // });
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
        const data = await this.service.getProducts(null);
        this.isLoaded = true;
        // this.products.render(this.service.getActualProducts.bind(this.service));
        this.products.render(() => this.service.getActualProducts());
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
