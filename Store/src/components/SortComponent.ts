/* eslint-disable prettier/prettier */
import { Callbacks, IComponent, IFilter, IProduct, SortQuery } from '../types/types';

class SortComponent implements IComponent {
    buttons: NodeListOf<HTMLInputElement>;
    query: SortQuery;
    callbacks!: Callbacks;
    constructor() {
        this.callbacks = {};
        this.buttons = document.querySelectorAll('.sort__input');
        this.handleEvent();
        this.query = { type: null };
    }
    setSendQueryCb(callback: (query: SortQuery) => void) {
        this.callbacks.sendSortQuery = callback;
    }
    render(data: IProduct[] | null): void {
        // TODO render here.
        ('');
    }
    handleEvent() {
        this.buttons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                this.toggleCheckedBittons(e);
                this.createQuery();
            });
        });
    }
    toggleCheckedBittons(e: Event) {
        const tagret = e.target as HTMLInputElement;
        const pushedDataset = tagret.dataset.type as string;
        this.buttons.forEach((btn) => {
            if (btn.dataset.type !== pushedDataset) {
                btn.checked = false;
            }
        })
    }

    createQuery() {
        this.buttons.forEach((i) => {
            if (i.checked && i.dataset.type) {
                this.query.type = i.dataset.type;
            }
        });
        this.sendQuery(this.query);
    }

    sendQuery(query: SortQuery) {
        if (this.callbacks.sendSortQuery) {
            this.callbacks.sendSortQuery(query);
        }
    }
    get getQuery() {
        return this.query;
    }
}

export default SortComponent;
