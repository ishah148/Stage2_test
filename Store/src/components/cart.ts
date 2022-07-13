import { ICart, IComponent } from '../types/types';

export class CartComponent implements IComponent {
    private cart!: ICart;
    constructor(cart: ICart) {
        console.log(cart);
    }
    render(): void {
        this.cart.getAllItems(); // TODO draw each item
    }
}
