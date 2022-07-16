import { IFilter, IProduct } from '../types/types';

export class Filter {
    private filterObj: IFilter;
    private data: IProduct[];
    constructor(query: IFilter, data: IProduct[]) {
        this.filterObj = query;
        this.data = data;
        console.log(this.filterData());
    }

    filterData(): IProduct[] {
        const resultArr: IProduct[] = [];
        for (const item of this.data) {
            if (this.filterObj.colors && !this.filterObj.colors.includes(item.color)) continue;
            if (this.filterObj.vendors && !this.filterObj.vendors.includes(item.vendor)) continue;
            if (this.filterObj.priceFrom && this.filterObj.priceFrom >= item.price) continue;
            if (this.filterObj.priceTo && this.filterObj.priceTo <= item.price) continue;
            resultArr.push(item);
        }
        return resultArr;
    }
}
