/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import { Callbacks, IFilter, IProduct, IProductService, SortQuery } from '../types/types';
import { Filter } from './Filter';
import { Sort } from './Sort';

class ProductService implements IProductService {
    private data: IProduct[] = []; // use only one time at once
    private filteredData: IProduct[] = []; //  current data for rendering components
    private filterQuery: IFilter | null;
    private sortQuery: SortQuery;
    private cartData: IProduct[] = [];
    private url: string = './assets/products_data/product.json';
    callbacks: Callbacks;
    constructor() {
        // this.init();
        console.log(this);

        this.getProductsData(null);
        this.callbacks = {};
        this.sortQuery = { type: null };
        this.filterQuery = null;
    }

    async getProductsData(_filter: IFilter | null): Promise<IProduct[]> {
        const responce = await fetch(this.url);
        const data = await responce.json();
        this.data = data;
        this.renderProducts(data);
        this.filteredData = data;
        return data;
    }

    get productsData(): Promise<IProduct[]> {
        return this.getProductsData(null);
    }
    // async init() {
    //     this.filteredData = await this.getProductsData(null);
    // }

    filterData(query: IFilter) {
        const filter = new Filter(query, this.data);
        this.filterQuery = query;
        this.filteredData = filter.filterData()
        if (filter.filterData()) this.renderProducts(filter.filterData())
    }

    sortProcucts(query: SortQuery) {
        const sort = new Sort(query, this.filteredData)
        // this.filteredData = sort.sortData()
        this.sortQuery = query;
        console.log(this.sortQuery)
        if (sort.sortData()) this.renderProducts(this.filteredData)
    }

    searchProducts(query: string) {
        let searchedData = this.filteredData.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
        if (!query) {
            searchedData = this.filteredData; //! TODO return this
            // searchedData = this.data;
        }
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
