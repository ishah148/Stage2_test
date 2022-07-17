import { IComponent, IProduct } from '../types/types';
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
    data!: IProduct[];
    // wrapper: HTMLElement;
    components!: FilterComponents;
    selectors!: Selectors;
    constructor() {
        this.createComponents();
        this
        this.render();
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
            <h6 class="text-center">Goods in stock</h6>
            <div id="sliderServe" class="filters-menu__nouislider"></div>
            <h6 class="text-center">Price</h6>
            <div id="sliderYear" class="filters-menu__nouislider"></div>`,
            filterCompany: `
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#filterCompany" aria-expanded="false" aria-controls="collapseExample">
                Developer
            </button>
            <div class="filters-menu__group collapse" id="filterCompany" data-filter="company-contaner"> Here filters!
            </div>`,
            filterColor: `
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#filterColor" aria-expanded="false" aria-controls="collapseExample">
                Color
            </button>
            <div class="filters-menu__group collapse" id="filterColor" data-filter="color-contaner"> Here Filters!
            </div>
            `,
            filterResolution: `
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#filterResolution" aria-expanded="false" aria-controls="collapseExample" >
                Camera resolution
            </button>
            <div class="filters-menu__group collapse" id="filterResolution" data-filter="resolution-contaner">  Here must be filter!!!
            </div>
            `,
        };
    }

    createSelectors() {
        this.selectors = {
            container: this.components.wrapper.querySelector('.filters-menu') as HTMLElement,
        };
    }
    getHTML(): string {
        return ``;
    }

    createNoUiSlider() {
        const sliderServe: noUiSlider.target = document.getElementById('sliderServe') as target;
        const sliderYear: noUiSlider.target = document.getElementById('sliderYear') as target;
        console.log(sliderServe);

        noUiSlider.create(sliderServe, {
            start: [1, 20],
            connect: true,
            range: {
                min: 1,
                max: 20,
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

        (sliderServe.noUiSlider as noUiSlider.API).on('change', (value, handle) => {
            console.log(
                value.map((i) => {
                    if (typeof i === 'string') {
                        return +i.slice(0, 4);
                    }
                })
            );
        });
        noUiSlider.create(sliderYear, {
            start: [1, 1000],
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

        (sliderYear.noUiSlider as noUiSlider.API).on('change', (value, handle) => {
            console.log(
                value.map((i) => {
                    if (typeof i === 'string') {
                        return +i.slice(0, 4);
                    }
                })
            );
        });
    }
}
export default FilterComponent;
