import ProductService from '../service/Service';
import { CartComponent } from './cart';
import FilterComponent from './FilterComponent';
import { ProductsComponent } from './ProductsComponent';
import SearchComponent from './SearchComponent';
import SortComponent from './SortComponent';

export class StoreComponent {
    private cart!: CartComponent;
    private service!: ProductService;
    private products!: ProductsComponent;
    private search!: SearchComponent;
    filter!: FilterComponent;
    sortComp!: SortComponent;
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
        this.sortComp = new SortComponent();
    }

    async sendCallbaks() {
        this.search = new SearchComponent(this.service.searchProducts.bind(this.service));
        this.service.getProductsCb(this.products.render.bind(this.products));
        this.service.getCartsCb(this.cart.render.bind(this.cart));
        const dataD = await this.service.productsData;
        this.filter.setProductsData(dataD);
        this.filter.setSendQueryCb(this.service.filterData.bind(this.service));
    }

    async load() {
        await this.service.getProductsData(null);
        this.service.renderProducts(null);
    }

    test() {
        console.log('StoreComp');
    }
}
