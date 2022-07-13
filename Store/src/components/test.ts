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