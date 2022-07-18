import { IFilter, IProduct } from '../types/types';

export class Filter {
    private filterObj: IFilter;
    private data: IProduct[];
    constructor(query: IFilter, data: IProduct[]) {
        this.filterObj = query;
        this.data = data;
        console.log(this.filterObj);
    }

    filterData(): IProduct[] {
        // console.log(this.data);
        const resultArr: IProduct[] = [];
        for (const item of this.data) {
            console.log(this.filterObj.color, item.color);
            console.log(this.filterObj.company, item.company);
            if (this.filterObj.color && !this.filterObj.color.includes(item.color)) continue;
            if (this.filterObj.company && !this.filterObj.company.includes(item.company)) continue;
            if (this.filterObj.priceFrom && this.filterObj.priceFrom >= item.price) continue;
            if (this.filterObj.priceTo && this.filterObj.priceTo <= item.price) continue;
            if (this.filterObj.yearFrom && this.filterObj.yearFrom >= item.year) continue;
            if (this.filterObj.yearTo && this.filterObj.yearTo <= item.year) continue;
            resultArr.push(item);
        }
        console.log(resultArr);
        return resultArr;
    }
}
