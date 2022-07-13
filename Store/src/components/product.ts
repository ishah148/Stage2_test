import { IComponent, IProduct } from '../types/types';

export class ProductsComponent implements IComponent {
    constructor(private data: IProduct[]) {
        this.init();
    }

    init() {
        // this.wrapper = document.getElementById('ProductsComponent')
    }

    render() {
        console.log('ProductsComponent');
    }
    // render(data): void {
    //     if(isHaveCards()){
    //         removeAll()
    //     }
    //     this.wrapper.insertAdjacentHTML('',html)
    //     // this.cart.getAllItems(); // TODO draw each item
    // }
}
