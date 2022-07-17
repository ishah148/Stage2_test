/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { IComponent, IProduct } from '../types/types';
type FilterComponents = {
    wrapper: HTMLElement,
    container: string,
    header: string,
    body: string,
    nouisliders: string,
    filterCompany:string;
    filterColor:string;
    filterResolution:string;
}

class FilterComponent implements IComponent {
    data!: IProduct[];
    // wrapper: HTMLElement;
    components!: FilterComponents;
    constructor() {
        this.createComponents();
        this.render()
    }
    render(): void {
        this.components.wrapper.insertAdjacentHTML('beforeend', this.components.container)
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
        }
    }

    getHTML(): string {
        return `

        



            <!-- filter company -->
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                Developer
            </button>
            <div class="filters-menu__group collapse" id="collapseExample1" data-filter="company-contaner">
                <div class="filters-menu__checkbox form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" data-filter="company">
                    <label class="form-check-label" for="flexCheckDefault1">
                        Iphone
                    </label>
                </div>
            </div>


            <!-- filter color -->
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample">
                Color
            </button>

            <div class="filters-menu__group collapse" id="collapseExample11" data-filter="color-contaner">
                <div class="filters-menu__checkbox form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" data-filter="color">
                    <label class="form-check-label" for="flexCheckDefault1">
                        Red
                    </label>
                </div>
            </div>


            <!-- filter camera resolution -->
            <button class="filters-menu__button-open btn btn-primary" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample111" aria-expanded="false" aria-controls="collapseExample" >
                Camera resolution
            </button>
            <div class="filters-menu__group collapse" id="collapseExample111" data-filter="resolution-contaner">

                <div class="filters-menu__checkbox form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault111" data-filter="resolution">
                    <label class="form-check-label" for="flexCheckDefault111">
                        12 MP
                    </label>
                </div>

            </div>
            
    `
    }

    // createWrapper(){
    //     <div class="filters-menu offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
    //         aria-labelledby="offcanvasExampleLabel">
    // }

}
export default FilterComponent;
