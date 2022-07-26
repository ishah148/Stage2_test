/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import FilterComponent from '../components/FilterComponent';
import SortComponent from '../components/SortComponent';
import { Callbacks, IFilter, IProduct, IProductService, SortQuery } from '../types/types';
import { Filter } from './Filter';
import StoreLocalStorage from './LocaStorage';
import { Sort } from './Sort';

class ProductService implements IProductService {
    private data: IProduct[] = []; // use only one time at once
    private filteredData: IProduct[] = []; //  current data for rendering components
    private filterQuery: IFilter | null;
    private sortQuery: SortQuery;
    private _cartData: IProduct[] = [];
    private searchQuery: string;
    private searchedData: IProduct[];
    private url: string = './assets/products_data/product.json';
    callbacks: Callbacks;
    private storeLocalStorage: StoreLocalStorage;
    private filterComponent!: FilterComponent;
    _sortComponent!: SortComponent | null;
    constructor() {
        this.searchQuery = '';
        this.searchedData = [];
        this.callbacks = {};
        this.sortQuery = { type: null };
        this.filterQuery = null;
        this.storeLocalStorage = new StoreLocalStorage()
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async getProductsData(_filter: IFilter | null): Promise<IProduct[]> {
        const responce = await fetch(this.url);
        const data = await responce.json();
        this.data = data;
        const filterQuery = this.storeLocalStorage.getLocalStorage('filterQuery');
        const sortQuery = this.storeLocalStorage.getLocalStorage('sortQuery');
        const cartData = this.storeLocalStorage.getLocalStorage('cartData');
        this.filteredData = data;
        if (sortQuery) {
            this.sortProcucts(sortQuery as SortQuery)
            this._sortComponent?.updateStyle(sortQuery as SortQuery);
        }
        if (filterQuery) {
            this.filterComponent.setCurrentQuery = filterQuery as IFilter
            this.filterData(filterQuery as IFilter);
            this.filterComponent.updateFilters();
        }
        else {
            this.renderProducts(data);
            this.filteredData = data;
        }
        if (cartData) {
            this._cartData = cartData as IProduct[];
            this.renderCart(cartData as IProduct[]);
        }
        return data;
    }

    get productsData(): Promise<IProduct[]> {
        return this.getProductsData(null);
    }
    get cartData(): IProduct[] {
        return this._cartData
    }
    setСartData(data: IProduct[]): void {
        this._cartData = data;
    }

    addCartItem(id: number) {
        const item = this.data.find((i) => i.id === id) as IProduct;
        const countItemInCart = this._cartData.filter((i) => i.id === id).length
        const countItemsInCart = this.cartData.reduce((res, i) => {
            return (res += i.onServe || 0);
        }, 0);
        console.log('add', this._cartData.find((i) => i.id === id)?.onServe)
        if (!item.onServe) {
            item.onServe = this._cartData.find((i) => i.id === id)?.onServe;
        }
        if (countItemsInCart >= 20) {
            alert('Cart is full!!!')
        }
        if ((item.onServe as number) >= item.onStorage) {
            alert("Извините, недостаточно товаров на складе");
        }
        if (this._cartData && countItemsInCart < 20)
            if (!countItemInCart) {
                item.onServe = 1;
                this._cartData.push(item as IProduct)
            } else if ((item.onServe as number) < item.onStorage) {
                this._cartData.forEach((i) => i.id === id ? (i.onServe as number) += 1 : 'nothing')
            }
        this.storeLocalStorage.setLocalStorage('cartData', this._cartData)
        this.renderCart(this._cartData);
    }

    removeCartItem(id: number) {
        const item = this.data.find((i) => i.id === id) as IProduct;
        if (item.onServe === 1) {
            item.onServe = 0;
            this._cartData = this._cartData.filter((i) => (i.onServe as number) > 0);
        } else {
            this._cartData.forEach((i) => i.id === id ? (i.onServe as number) -= 1 : 'nothing')
        }
        this.storeLocalStorage.setLocalStorage('cartData', this._cartData)
        this.renderCart(this._cartData);
    }

    clearCart() {
        this._cartData = [];
        this.storeLocalStorage.setLocalStorage('cartData', this._cartData);
        this.renderCart(this._cartData);
    }

    filterData(query: IFilter) {
        this.storeLocalStorage.setLocalStorage('filterQuery', query);
        const filter = new Filter(query, this.data);
        this.filterQuery = query;
        this.filteredData = filter.filterData()
        if (filter.filterData()) this.renderProducts(filter.filterData())
    }

    sortProcucts(query: SortQuery) {
        // debugger;
        this.storeLocalStorage.setLocalStorage('sortQuery', query);
       
        this.sortQuery = query;
        if (this.searchQuery) {
            const sort = new Sort(query, this.searchedData);
            sort.sortData();
            this.renderProducts(this.searchedData)
        }

        if (!this.searchQuery) {
            const sort = new Sort(query, this.filteredData);
            sort.sortData();
            this.renderProducts(this.filteredData)
        } 
    }

    searchProducts(query: string) {
        let searchedData = this.filteredData.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
        if (!query) {
            searchedData = this.filteredData;
        }
        if (!searchedData.length) {
            alert('Not found!');
            return;
        }
        this.searchQuery = query;
        this.searchedData = searchedData;
        this.renderProducts(searchedData);
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
    // callbacks handle
    getProductsCb(renderProductsCb: (data: IProduct[] | null) => void) {
        this.callbacks.renderProducts = renderProductsCb;
    }

    getCartCb(renderCartCb: (data: IProduct[] | null) => void) {
        this.callbacks.renderCart = renderCartCb;
    }

    set sortСomponent(component: SortComponent) {
        this._sortComponent = component;
        console.log(this._sortComponent)
    }

    set setFilter(filter: FilterComponent) {
        this.filterComponent = filter
    }
}

export default ProductService;

// private renderProductsCb: (data: IProduct[] | null) => void;
// renderProductsCb: (data: IProduct[] | null) => void
// this.renderProductsCb = renderProductsCb;
