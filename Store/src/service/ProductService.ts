import { IFilter, IProduct, IProductService } from '../types/types';

// import * as jsonData from "../products_data/product.json"
class ProductService implements IProductService {
    private Data!: IProduct[];
    // filterData(data: IProduct[]): IProduct[]
    // async getProducts(filter: IFilter | null): Promise<IProduct[]>;
    async getProducts(filter: IFilter | null): Promise<IProduct[]> {
        if (!filter) {
            console.log('!filter');
        }
        // const responce = await fetch('../Store/src/components/products_data/product.json');
        const responce = await fetch('.product.json');
        const data = await responce.json();
        // if (!filter) {
        //     render(data)
        // } else {
        //     const filteredData = filter(data);
        //     render(filteredData)
        // }
        return data;
    }
}
export default ProductService;
