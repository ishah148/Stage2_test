import { IComponent, IFilter, IProduct } from '../types/types';
import * as noUiSlider from 'nouislider';
import { target } from 'nouislider';
import wNumb from 'wnumb';
type FilterComponents = {
    wrapper: HTMLElement;
    container: string;
    header: string;
    body: string;
    nouisliders: string;
    filterCompany: string;
    filterColor: string;
    filterResolution: string;
};
type Selectors = {
    [key: string]: HTMLElement;
};
class FilterComponent implements IComponent {
    private data!: IProduct[];
    private components!: FilterComponents;
    private selectors!: Selectors;
    private sliderPrice!: noUiSlider.target;
    private sliderYear!: noUiSlider.target;
    private filterQuery!: IFilter;

    constructor() {
        this.createComponents();
        this.render();
        this.createSelectors();
        console.dir(this);
    }
    render(): void {
        this.components.wrapper.insertAdjacentHTML('beforeend', this.components.container);
        const container = this.components.wrapper.querySelector('.filters-menu');
        container?.insertAdjacentHTML('beforeend', this.components.header);
        container?.insertAdjacentHTML('beforeend', this.components.body);
        const body = this.components.wrapper.querySelector('.filters-menu__body');
        body?.insertAdjacentHTML('beforeend', this.components.nouisliders);
        body?.insertAdjacentHTML('beforeend', this.components.filterCompany);
        body?.insertAdjacentHTML('beforeend', this.components.filterColor);
        body?.insertAdjacentHTML('beforeend', this.components.filterResolution);
        this.createNoUiSlider();
    }
    click(): void {
        //e.tagret = callback();
    }
    setProductsData(data: IProduct[]) {
        this.data = data;
        this.renderCheckboxes();
        this.hanldeEvents();
    }

    hanldeEvents() {
        this.selectors.container.querySelectorAll('input').forEach((el) => {
            el.addEventListener('change', () => {
                this.createQuery();
            });
        });
    }

    // sendQuery() {
    //     '';
    // }
    createQuery() {
        const filterQuery: IFilter = {
            color: [],
            company: [],
            camResolution: [],
            priceFrom: 1,
            priceTo: 1000,
            yearFrom: 2010,
            yearTo: 2022,
        };
        this.selectors.container.querySelectorAll('input').forEach((i) => {
            const value = i.dataset.value;
            const name = i.dataset.filter;
            if (i.checked) {
                (filterQuery[`${name as keyof typeof filterQuery}`] as string[]).push(value as string);
            }
        });
        const priceFrom = document.querySelector('#sliderPrice > div > div:nth-child(2) > div > div.noUi-tooltip')
            ?.textContent;
        const priceTo = document.querySelector('#sliderPrice > div > div:nth-child(3) > div > div.noUi-tooltip')
            ?.textContent;
        const yearFrom = document.querySelector('#sliderYear > div > div:nth-child(2) > div > div.noUi-tooltip')
            ?.textContent;
        const yearTo = document.querySelector('#sliderYear > div > div:nth-child(3) > div > div.noUi-tooltip')
            ?.textContent;
        console.log(priceFrom, priceTo, yearFrom, yearTo);
        if (priceFrom && priceTo && yearFrom && yearTo) {
            filterQuery.priceFrom = parseInt(priceFrom);
            filterQuery.priceTo = parseInt(priceTo);
            filterQuery.yearFrom = parseInt(yearFrom);
            filterQuery.yearTo = parseInt(yearTo);
        }
        console.log(filterQuery);
    }

    renderCheckboxes() {
        this.selectors.filterCompany.insertAdjacentHTML('beforeend', this.getCheckboxHTML(this.data, 'company'));
        this.selectors.filterColor.insertAdjacentHTML('beforeend', this.getCheckboxHTML(this.data, 'color'));
        this.selectors.filterResolution.insertAdjacentHTML(
            'beforeend',
            this.getCheckboxHTML(this.data, 'camResolution')
        );
    }

    getCheckboxHTML(data: IProduct[], type: string): string {
        const HTML: Array<string> = [];
        const temp: Array<string> = [];
        data.forEach((i) => {
            return temp.push(i[`${type as keyof typeof i}`] as string);
        });

        data.forEach((obj) => {
            // TODO remove duplicate
            HTML.push(`<input class= "form-check-input" type ="checkbox" value ="" id = "id-${
                obj[`${type as keyof typeof obj}`]
            }" data-filter="${type}" data-value="${obj[`${type as keyof typeof obj}`]}" >
        <label class="form-check-label" for="id-${obj[`${type as keyof typeof obj}`]}"> ${
                obj[`${type as keyof typeof obj}`]
            } </label><br>`);
        });
        // console.dir(a);
        const uniqHTML = new Set(HTML);
        return [...uniqHTML].join('');
    }

    createComponents() {
        this.components = {
            wrapper: document.getElementById('filter-menu') as HTMLElement,
            container: `<div class="filters-menu offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"></div>`,
            header: `
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
                <button type="button" id="filters-menu__reset"
                    class="filters-menu__reset btn btn-secondary">Reset</button>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>`,
            body: `<div class="filters-menu__body offcanvas-body"></div>`,

            nouisliders: `
            <h6 class="text-center">Price</h6>
            <div id="sliderPrice" class="filters-menu__nouislider"></div>
            <h6 class="text-center">Year</h6>
            <div id="sliderYear" class="filters-menu__nouislider"></div>`,
            filterCompany: `
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#filterCompany" aria-expanded="false" aria-controls="collapseExample">Company</button>
            <div class="filters-menu__group collapse" id="filterCompany" data-filter="company-contaner"></div>`,
            filterColor: `
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#filterColor" aria-expanded="false" aria-controls="collapseExample">Color</button>
            <div class="filters-menu__group collapse" id="filterColor" data-filter="color-contaner"></div>
            `,
            filterResolution: `
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#filterResolution" aria-expanded="false" aria-controls="collapseExample" >Camera resolution</button>
            <div class="filters-menu__group collapse" id="filterResolution" data-filter="resolution-contaner"></div>
            `,
        };
    }

    createSelectors() {
        this.selectors = {
            container: this.components.wrapper.querySelector('.filters-menu') as HTMLElement,
            resetFiltersBtn: document.getElementById('filters-menu__reset') as HTMLElement,
            filterCompany: document.getElementById('filterCompany') as HTMLElement,
            filterColor: document.getElementById('filterColor') as HTMLElement,
            filterResolution: document.getElementById('filterResolution') as HTMLElement,
        };
    }
    getHTML(): string {
        return ``;
    }

    randomInteger(min: number, max: number) {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    createNoUiSlider() {
        this.sliderPrice = document.getElementById('sliderPrice') as target;
        this.sliderYear = document.getElementById('sliderYear') as target;

        noUiSlider.create(this.sliderYear, {
            start: [2010, 2022],
            step: 1,
            connect: true,
            range: {
                min: 2010,
                max: 2022,
            },
            format: {
                to: function (value) {
                    return value + ',-';
                },
                from: function (value) {
                    return Number(value.replace(',-', ''));
                },
            },
            tooltips: [
                wNumb({ decimals: 0 }), // tooltip with custom formatting
                wNumb({ decimals: 0 }), // tooltip with default formatting
            ],
        });

        noUiSlider.create(this.sliderPrice, {
            start: [1, 1000],
            step: 10,
            connect: true,
            range: {
                min: 1,
                max: 1000,
            },
            format: {
                to: function (value) {
                    return value + ',-';
                },
                from: function (value) {
                    return Number(value.replace(',-', ''));
                },
            },
            tooltips: [
                wNumb({ decimals: 0 }), // tooltip with custom formatting
                wNumb({ decimals: 0 }), // tooltip with default formatting
            ],
        });
        // (this.sliderYear.noUiSlider as noUiSlider.API).on('change', (value, handle) => () => console.log(123));
        // (this.sliderPrice.noUiSlider as noUiSlider.API).on('change', (value, handle) => () => this.createQuery() );
        (this.sliderYear.noUiSlider as noUiSlider.API).on('change', (value, handle) => {
            this.createQuery();
        });
        (this.sliderPrice.noUiSlider as noUiSlider.API).on('change', (value, handle) => {
            this.createQuery();
        });
    }
}
export default FilterComponent;

// (this.sliderYear.noUiSlider as noUiSlider.API).on('change', (value, handle) => {
//     console.log(
//         value.map((i) => {
//             if (typeof i === 'string') {
//                 return +i.slice(0, 4);
//             }
//         })
//     );
// });
// (this.sliderPrice.noUiSlider as noUiSlider.API).on('change', (value, handle) => {
//     console.log(
//         value.map((i) => {
//             if (typeof i === 'string') {
//                 return +i.slice(0, 4);
//             }
//         })
//     );
// });
