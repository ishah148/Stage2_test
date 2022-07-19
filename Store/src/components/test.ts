// interface IApiData {
//     id: number;
//     name: string;
//     price: number;
//     color: string;
//     countInCart: number;
//     description: string;
// }

// interface IDataService {
//     getData(): IApiData[];
// }

// interface IDataStorage {
//     Allproducts: IApiData[];
//     filteredProducts: IApiData[];
//     cartData: IApiData[];
// }

// class Store {
//     drowConponents(): void {
//         new Search();
//         new Filter();
//         new Cart();
//     }
//     render(): void {
//         // TODO update necessary components
//     }
// }

// class Search {
//     draw(): void {
//         //TODO  draw search bar
//     }
// }

// class Filter {
//     draw(): void {
//         //TODO  draw filter
//     }
// }

// class Cart {
//     draw(): void {
//         //TODO dwar Cards
//     }
// }

// interface IData {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
// }

// const obj: IData = {
//     id: 1,
//     title: 'string',
//     price: 2,
//     description: 'string',
//     category: 'string',
//     image: 'string',
//     rating: {
//         rate: 3,
//         count: 4,
//     },
// };

// interface IProduct {
//     id: number;
//     name: string;
//     price: number;
//     color: string;
//     description: string;
// }

// interface IFilter {
//     query: string;
//     priceFrom: number;
//     priceTo: number;
// }

// interface IProductService {
//     private Data;
//     filterData(data: IProduct[]): IProduct[]
//     // async getProducts(filter: IFilter | null): Promise<IProduct[]>;
//     async getProducts(filter: IFilter | null): Promise<IProduct[]> {

//     const responce = await fetch('JSON');
//     const data = await responce.json();
//     if (!filter) {
//         render(data)
//     } else {
//         const filteredData = filter(data);
//         render(filteredData)
//     }
// }

// }
//     // plug from promise to []
//     // if(!filter){
//     //  await render(AllProductFromJSON)
//     //}else{
//     //await render(FilteredProducts)
//     // }
//     // render(getProducts())
// }

// interface IApiClient {
//     getProducts(): Promise<IProduct[]>;
// }

// interface ICart {
//     getAllItems(): ICartItem[];

//     add(product: IProduct): void;

//     remove(product: IProduct): void;
// }

// interface ICartItem {
//     product: IProduct;
//     amount: number;
// }

// interface IComponent {
//     render(): void;
// }

// class

// class StoreComponent implements IComponent {
//     private productService: IProductService;
//     private cart: ICart;
//     private poductCards: CartComponent;

//     private isLoaded = false;
//     private products = null;

//     constructor() {
//         this.load();
//     }

//     private async load() {
//         this.products = await this.productService.getProducts();
//         this.isLoaded = true;

//         this.render();
//     }

//     protected renderCart(data): void { // start rendering
//         // this.render(this.productService.filterData(data))

//     }
//     protected renderProducts(): void { // start rendering
//         //product
//         //cards
//     }

//     private render(): void {
//         // TODO update necessary components
//         // renderConponents();
//         new Search;
//         new Filter;
//         new Cart;
//     }
// }

// class SearchComponent extends StoreComponent implements IComponent {
//     constructor() {
//     }
//     search() {
//         super.renderCart(getDataFromIput())
//     }
//     render(): void {
//         //TODO  draw search bar
//     }
// }

// class FilterComponent implements IComponent {

//     // onsumbit =
//     render(): void {
//         //TODO  draw filter
//     }
// }

// class CartComponent implements IComponent {

//     private cart: ICart;

//     render(): void {
//         this.cart.getAllItems(); // TODO draw each item
//     }
// }

// class ProductsComponent implements IComponent {
//     constructor(private data: IProduct[]) {
//         this.init()
//     }

//     init()
//         this.wrapper = document.getElementById('ProductsComponent')
//     }
//     render(data): void {
//         if(isHaveCards()){
//             removeAll()
//         }
//         this.wrapper.insertAdjacentHTML('',html)
//         // this.cart.getAllItems(); // TODO draw each item
//     }
// }

// <div class="filters-menu offcanvas offcanvas-start d-none" tabindex="-1" id="offcanvasExample"
//             aria-labelledby="offcanvasExampleLabel">
//             <div class="offcanvas-header">
//                 <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
//                 <button type="button" id="filters-menu__reset"
//                     class="filters-menu__reset btn btn-secondary">Reset</button>
//                 <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
//                     aria-label="Close"></button>
//             </div>
//             <div class="filters-menu__body offcanvas-body">
//                 <h6 class="text-center">Goods in stock</h6>
//                 <div id="sliderServe" class="filters-menu__nouislider"></div>
//                 <h6 class="text-center">Price</h6>
//                 <div id="sliderYear" class="filters-menu__nouislider"></div>

//                 <!-- filter company -->
//                 <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
//                     data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
//                     Developer
//                 </button>
//                 <div class="filters-menu__group collapse" id="collapseExample1" data-filter="company-contaner">
//                     <div class="filters-menu__checkbox form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" data-filter="company">
//                         <label class="form-check-label" for="flexCheckDefault1">
//                             Iphone
//                         </label>
//                     </div>
//                 </div>

//                 <!-- filter color -->
//                 <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
//                     data-bs-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample">
//                     Color
//                 </button>
//                 <div class="filters-menu__group collapse" id="collapseExample11" data-filter="color-contaner">
//                     <div class="filters-menu__checkbox form-check">
//                         выблядок ты где был??????
//                         у тебя за щекой спрятался
//                         псина

//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" data-filter="color">
//                         <label class="form-check-label" for="flexCheckDefault1">
//                             Red
//                         </label>
//                     </div>
//                 </div>

//                 <!-- filter camera resolution -->
//                 <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
//                     data-bs-target="#collapseExample111" aria-expanded="false" aria-controls="collapseExample" >
//                     Camera resolution
//                 </button>
//                 <div class="filters-menu__group collapse" id="collapseExample111" data-filter="resolution-contaner">

//                     <div class="filters-menu__checkbox form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault111" data-filter="resolution">
//                         <label class="form-check-label" for="flexCheckDefault111">
//                             12 MP
//                         </label>
//                     </div>

//                 </div>

//             </div>
//         </div>

// <div class="product-card card">
// <img src="assets/galaxya023.webp" class="card-img-top" alt="...">
// <div class="product-card__body  card-body">
//     <h6 class="product-card__name card-title">Redmi Note 7</h6>
//     <div
//         class="product-card__price-and-color container d-flex justify-content-between align-items-center">
//         <h6 class="product-card__price card-title">120$</h6>
//         <div class="product-card__color"></div>
//     </div>
//     <p class="card-text">Some quick example text .</p>
//     <button type="button" class="product-card__add-to-cart btn btn-primary" data-bs-container="body"
//         data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">Add ro cart <svg
//             xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
//             class="bi bi-cart3" viewBox="0 0 16 16">
//             <path
//                 d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
//         </svg></button>
// </div>
// </div>
