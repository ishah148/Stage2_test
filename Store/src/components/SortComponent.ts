import { IComponent, IProduct, SortQuery } from '../types/types';

class SortComponent implements IComponent {
    buttons: NodeListOf<HTMLInputElement>;
    query: SortQuery;
    constructor() {
        this.buttons = document.querySelectorAll('.sort__input');
        this.handleEvent();
        this.query = { type: null };
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
    }
    get getQuery() {
        return this.query;
    }
}

export default SortComponent;
