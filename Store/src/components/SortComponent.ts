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
            btn.addEventListener('click', () => this.createQuery());
        });
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
        console.log('sended');
        if (this.callbacks.sendSortQuery) {
            this.callbacks.sendSortQuery(query);
        }
    }
    get getQuery() {
        return this.query;
    }
}

export default SortComponent;
