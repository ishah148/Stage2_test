import { IFilter, IProduct, SortQuery } from '../types/types';

class StoreLocalStorage {
    setLocalStorage(name: string, obj: IFilter | SortQuery | IProduct[]) {
        localStorage.setItem(name, JSON.stringify(obj));
    }

    getLocalStorage(name: string): IFilter | SortQuery | IProduct[] | null {
        if (localStorage.getItem(name)) {
            const data = localStorage.getItem(name) || '';
            return JSON.parse(data);
        } else {
            return null;
        }
    }
}
export default StoreLocalStorage;
