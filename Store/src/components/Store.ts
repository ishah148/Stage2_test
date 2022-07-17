import ProductService from '../service/Service';
import { CartComponent } from './cart';
import FilterComponent from './FilterComponent';
import { ProductsComponent } from './ProductsComponent';
import SearchComponent from './SearchComponent';

export class StoreComponent {
    private cart!: CartComponent;
    private service!: ProductService;
    private products!: ProductsComponent;
    private search!: SearchComponent;
    filter!: FilterComponent;
    constructor() {
        this.initComponents();
        this.sendCallbaks();
        // this.products = new ProductsComponent(() => this.service.getActualProducts());
        // this.search = new SearchComponent(this.service.searchProducts.bind(this.service));
        // this.service = new ProductService(this.products.render.bind(this.products));
        // this.load();
    }

    initComponents() {
        this.service = new ProductService();
        this.products = new ProductsComponent();
        this.cart = new CartComponent();
        this.filter = new FilterComponent();
    }

    sendCallbaks() {
        this.search = new SearchComponent(this.service.searchProducts.bind(this.service));
        this.service.getProductsCb(this.products.render.bind(this.products));
        this.service.getCardsCb(this.cart.render.bind(this.cart));
        this.filter.setProductsData(this.service.productsData);
    }

    async load() {
        await this.service.getProductsData(null);
        this.service.renderProducts(null);
    }

    test() {
        console.log('StoreComp');
    }
}
