import { IProductService, IComponent } from '../types/types';

export class StoreComponent implements IComponent {
    // constructor() {}
    private productService: IProductService;
    private cart: ICart;
    private poductCards: CartComponent;

    // private isLoaded = false;
    // private products = null;

    constructor() {
        this.load();
    }

    render(): void {
        console.log(123);
    }
    init(): void {
        console.log(456);
    }
    // private async load() {
    //     this.products = await this.productService.getProducts();
    //     this.isLoaded = true;

    //     this.render();
    // }

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

// export default StoreComponent;
