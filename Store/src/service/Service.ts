/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import { Callbacks, IFilter, IProduct, IProductService } from '../types/types';
import { Filter } from './Filter';

class ProductService implements IProductService {
    private data: IProduct[] = []; // use only one time at once
    private filteredData: IProduct[] = []; //  current data for rendering components
    private cartData: IProduct[] = [];
    private url: string = './assets/products_data/product.json';
    callbacks: Callbacks;
    constructor() {
        // this.init();
        this.getProductsData(null);
        this.callbacks = {};
    }

    async getProductsData(_filter: IFilter | null): Promise<IProduct[]> {
        const responce = await fetch(this.url);
        const data = await responce.json();
        this.data = data;
        this.renderProducts(data);
        return data;
    }

    get productsData(): Promise<IProduct[]> {
        return this.getProductsData(null);
    }
    // async init() {
    //     this.filteredData = await this.getProductsData(null);
    // }

    getActualProducts() {
        // this.renderProducts();
        return this.filteredData;
    }

    filterData(query: IFilter) {
        console.log('servict this data',this.data);
        const filter = new Filter(query, this.data);
        if(filter.filterData()) this.renderProducts(filter.filterData())
    }
    searchProducts(query: string) {
        let searchedData = this.data.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
        if (!query) {
            // searchedData = this.filteredData; //! TODO return this
            searchedData = this.data;
        }
        console.log(searchedData);
        this.renderProducts(searchedData);
    }

    getProductsCb(renderProductsCb: (data: IProduct[] | null) => void) {
        this.callbacks.renderProducts = renderProductsCb;
    }
    getCartsCb(renderCartCb: (data: IProduct[] | null) => void) {
        this.callbacks.renderCart = renderCartCb;
    }

    renderProducts(data: IProduct[] | null): void {
        if (this.callbacks.renderProducts) {
            this.callbacks.renderProducts(data);
        }
    }
    renderCart(data: IProduct[] | null): void {
        if (this.callbacks.renderCart) {
            this.callbacks.renderCart(data);
        }
    }
}

export default ProductService;

// private renderProductsCb: (data: IProduct[] | null) => void;
// renderProductsCb: (data: IProduct[] | null) => void
// this.renderProductsCb = renderProductsCb;
