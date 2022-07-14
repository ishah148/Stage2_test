import { IFilter, IProduct, IProductService } from '../types/types';

// import * as jsonData from "../products_data/product.json"
class ProductService implements IProductService {
    private data: IProduct[] = []; // use only one time at once
    private filteredData: IProduct[] = []; //  current data for rendering components
    private cartData: IProduct[] = [];
    private url: string = './assets/products_data/product.json';
    private renderProductsCb: () => void;
    constructor(renderProductsCb: () => void) {
        this.renderProductsCb = renderProductsCb;
        // this.getProducts(null);
        this.init();
    }

    async getProducts(filter: IFilter | null): Promise<IProduct[]> {
        if (!filter) {
            console.log('!filter');
        }
        // const responce = await fetch('../Store/src/components/products_data/product.json');
        const responce = await fetch(this.url);
        const data = await responce.json();
        return data;
    }

    async init() {
        this.filteredData = await this.getProducts(null);
    }

    getActualProducts() {
        this.renderProducts();
        return this.filteredData;
    }
    renderProducts(): void {
        // console.log(this.renderProductsCb);
        this.renderProductsCb();
    }
}

export default ProductService;
