/* eslint-disable no-useless-escape */
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
        this.init();
    }

    async getProducts(filter: IFilter | null): Promise<IProduct[]> {
        if (!filter) {
            // console.log('!filter');
        }
        const responce = await fetch(this.url);
        const data = await responce.json();
        this.data = data;
        return data;
    }

    async init() {
        this.filteredData = await this.getProducts(null);
    }

    getActualProducts() {
        console.log(this.filteredData);
        // this.renderProducts();
        return this.filteredData;
    }

    renderProducts(): void {
        this.renderProductsCb();
        this.renderProductsCb();
        this.renderProductsCb();
    }

    searchProducts(query: string) {
        this.filteredData = this.filteredData.filter((i) => i.name.includes(query.toLowerCase()));
        if (!query) {
            this.filteredData = this.data;
        }
        this.renderProducts();
        console.log(this.filteredData);
        // console.log('this.data', this.data);
    }
}

export default ProductService;
