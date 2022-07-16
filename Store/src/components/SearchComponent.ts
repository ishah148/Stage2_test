import { IComponent } from '../types/types';
class SearchComponent implements IComponent {
    searchBar: HTMLElement;
    searchBarInput!: HTMLInputElement;
    searchServiceCb: (query: string) => void;
    constructor(searchServiceCb: (query: string) => void) {
        this.searchServiceCb = searchServiceCb;
        this.searchBar = <HTMLElement>document.getElementById('search-bar');
        this.render();
        this.initEvents();
    }
    search() {
        // super.renderCart(getDataFromIput())
    }
    render(): void {
        //TODO  draw search bar
        this.searchBar.insertAdjacentHTML('beforeend', this.getHTML());
        this.searchBarInput = document.querySelectorAll('.search__input')[0] as HTMLInputElement;
    }
    getHTML(): string {
        return `
        <div class="input-group w-75">
            <input class="search__input form-control rounded" id="search " type="search"  placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
            <button  type="button" class="search__button btn btn-outline-primary ms-1">search</button>
        </div>
        `;
    }
    test(e: Event) {
        // console.log(e);
        const searchQuery: string = (e.target as HTMLInputElement).value;
        // console.log(searchQuery);
        this.searchServiceCb(searchQuery);
    }
    initEvents(): void {
        //console.log('bar', this.searchBar);
        //console.log('input', this.searchBarInput);
        this.searchBarInput.onchange = (e) => this.test(e);
    }
}
export default SearchComponent;
