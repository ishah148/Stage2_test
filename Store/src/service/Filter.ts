import { IFilter, IProduct } from '../types/types';

export class Filter {
    private filterObj: IFilter;
    private data: IProduct[];
    constructor(query: IFilter, data: IProduct[]) {
        this.filterObj = query;
        this.data = data;
    }
    filterData(): IProduct[] {
        const resultArr: IProduct[] = [];
        for (const item of this.data) {
            if (this.filterObj.color.length && !this.filterObj.color.includes(item.color)) continue;
            if (this.filterObj.company.length && !this.filterObj.company.includes(item.company)) continue;
            if (this.filterObj.camResolution.length && !this.filterObj.camResolution.includes(item.camResolution))
                continue;
            if (this.filterObj.priceFrom && this.filterObj.priceFrom >= item.price) continue;
            if (this.filterObj.priceTo && this.filterObj.priceTo <= item.price) continue;
            if (this.filterObj.yearFrom && this.filterObj.yearFrom >= item.year) continue;
            if (this.filterObj.yearTo && this.filterObj.yearTo <= item.year) continue;
            resultArr.push(item);
        }
        return resultArr;
    }
}
