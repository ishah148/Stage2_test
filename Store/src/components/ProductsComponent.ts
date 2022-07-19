import Service from '../service/Service';
import { IComponent, IProduct } from '../types/types';

export class ProductsComponent implements IComponent {
    wrapper: HTMLElement;
    productsData: IProduct[] | null;
    service: Service;

    constructor(service: Service) {
        this.wrapper = <HTMLElement>document.querySelector('.product-card__wrapper');
        this.productsData = null;
        this.service = service;
    }

    render(data: IProduct[] | null): void {
        this.clearProducts();
        data?.forEach((data: IProduct) => {
            return this.wrapper.insertAdjacentHTML('beforeend', this.getHTML(data));
        });
        this.handleEvents();
    }

    clearProducts(): void {
        this.wrapper.querySelectorAll('.product-card').forEach((i) => i.remove());
    }

    handleEvents() {
        const productsButtons = document.querySelectorAll('#cart-sender');
        productsButtons.forEach((i) => {
            (i as HTMLElement).onclick = (e) => this.addCartItem(e);
        });
    }

    addCartItem(e: Event) {
        const id = (e.target as HTMLElement).dataset.id;
        if (typeof id === 'string') this.service.addCartItem(+id);
    }

    getHTML(obj: IProduct): string {
        return `
        <div class="product-card card">
            <img src="${obj.imageSrc}" class="card-img-top" alt="...">
            <div class="product-card__body  card-body">
                <h6 class="product-card__name card-title">${obj.name}</h6>
                <div class="product-card__price-and-color container d-flex justify-content-between align-items-center">
                    <h6 class="product-card__price card-title">${obj.price}$</h6>
                    <div class="product-card__color" style="background: ${obj.color}"></div>
                </div>
                <p class="card-text">${obj.camResolution}</p>
                <button id="cart-sender" class="product-card__add-to-cart btn btn-primary" data-id="${obj.id}" data-Cart${obj.id}>Add ro cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                        class="bi bi-cart3" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </button>
            </div>
        </div>
        `;
    }
}

// this.getActualProductsCb = getActualProductsCb;
// public getActualProductsCb: () => IProduct[];
