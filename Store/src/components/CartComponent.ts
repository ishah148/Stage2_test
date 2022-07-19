import Service from '../service/Service';
import { IComponent, IProduct } from '../types/types';

export class CartComponent {
    private header: HTMLElement;
    private modalBody: HTMLElement;
    service: Service;
    cartCountEl: HTMLElement;
    constructor(service: Service) {
        this.header = <HTMLElement>document.querySelector('header');
        this.cartCountEl = <HTMLElement>document.getElementById('cart-count');
        this.modalWindowRender();
        this.modalBody = <HTMLElement>document.querySelector('.modal-body');
        this.service = service;
    }

    handleEvents() {
        console.log('handle');
        this.modalBody.querySelectorAll('.good-item__add-button').forEach((i) => {
            (i as HTMLElement).onclick = (e) => this.addCartItem(e);
        });
        this.modalBody.querySelectorAll('.good-item__remove-button').forEach((i) => {
            (i as HTMLElement).onclick = (e) => this.removeCartItem(e);
        });
    }
    addCartItem(e: Event) {
        const id = (e.target as HTMLElement).dataset.id;
        console.log('', id);
        if (typeof id === 'string') this.service.addCartItem(+id);
    }
    removeCartItem(e: Event) {
        const id = (e.target as HTMLElement).dataset.id;
        console.log('', id);
        if (typeof id === 'string') this.service.removeCartItem(+id);
    }

    modalWindowRender(): void {
        this.header.insertAdjacentHTML('beforeend', this.getModalWindowHTML());
    }
    cartRender(data: IProduct[] | null): void {
        this.clearCartItems();
        data?.forEach((data: IProduct) => {
            return this.modalBody.insertAdjacentHTML('beforeend', this.getItemHTML(data));
        });
        this.handleEvents();
        this.updateCartCount();
    }
    clearCartItems() {
        this.modalBody.querySelectorAll('.good-item').forEach((i) => i.remove());
    }

    updateCartCount() {
        // console.log('', this.cartCountEl.textContent);
        (this.cartCountEl.textContent as string) =
            this.service.cartData.reduce((res, i) => {
                return (res += i.onServe || 0);
            }, 0) + '';
    }

    getItemHTML(data: IProduct): string {
        return `
        <div class="good-item" data-id="${data.id}">
            <div class="good-item__image-wrapper">
                <img src="${data.imageSrc}" alt="" class="good-item__image">
            </div>
            <p class="good-item__name">
                ${data.name}
            </p>
            <div class="good-item__quantity">
                ${data.onServe || 0}
            </div>
            <div class="good-item__buttons-container">
                <button class="good-item__add-button" data-id="${data.id}">
                    <svg class="good-item__button-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-patch-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                    </svg>
                </button>
                <button class="good-item__remove-button" data-id="${data.id}">
                    <svg class="good-item__button-svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-patch-minus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                    </svg>
                </button>
            </div>
        </div>`;
    }

    getModalWindowHTML(): string {
        return `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
