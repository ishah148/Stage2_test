import { IFilter, IProduct, IProductService } from '../types/types';

// import * as jsonData from "../products_data/product.json"
class ProductService implements IProductService {
    private data: IProduct[] = []; // use only one time at once
    private filteredData: IProduct[] = []; //  current data for rendering components
    private cartData: IProduct[] = [];
    private url: string = './assets/products_data/product.json';
    constructor() {
        this.getProducts(null);
    }
    // private Storage: IProduct[];
    // filterData(data: IProduct[]): IProduct[]
    // async getProducts(filter: IFilter | null): Promise<IProduct[]>;
    async getProducts(filter: IFilter | null): Promise<IProduct[]> {
        if (!filter) {
            console.log('!filter');
        }
        // const responce = await fetch('../Store/src/components/products_data/product.json');
        const responce = await fetch(this.url);
        console.log(responce);
        this.data = await responce.json();
        console.log(this.data);
        return this.data;
    }

    firstRender() {
        // draw callbacks
    }

    getActualProducts() {
        return this.data;
    }
}
export default ProductService;
