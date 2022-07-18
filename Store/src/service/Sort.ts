import { IProduct, SortQuery } from '../types/types';

export class Sort {
    private query: SortQuery;
    private data: IProduct[];

    constructor(query: SortQuery, data: IProduct[]) {
        this.query = query;
        this.data = JSON.parse(JSON.stringify(data));
        switch (this.query.type) {
            case 'nameAZ':
                console.log(this.sortByNameAZ());
                break;
            case 'nameZA':
                console.log(this.sortByNameZA());
                break;
            case 'price19':
                console.log(this.sortByPrice19());
                break;
            case 'price91':
                console.log(this.sortByPrice91());
                break;
            default:
                console.log('meeeeh');
        }
    }

    sortByNameAZ(): IProduct[] {
        return this.data.sort((item1, item2) => (item1.name > item2.name ? 1 : -1));
    }

    sortByNameZA(): IProduct[] {
        return this.data.sort((item1, item2) => (item1.name < item2.name ? 1 : -1));
    }

    sortByPrice19(): IProduct[] {
        return this.data.sort((item1, item2) => (item1.price > item2.price ? 1 : -1));
    }

    sortByPrice91(): IProduct[] {
        return this.data.sort((item1, item2) => (item1.price < item2.price ? 1 : -1));
    }
}
