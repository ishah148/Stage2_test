import RaceApi from './api';
import { Car } from './car';
import { randomInt, generateRandomCar, generateRandomColor } from './carsModelList';

export class ModalWindow {
    private car: Car;
    private wrapper: HTMLDivElement | undefined;
    api: RaceApi;
    constructor(car: Car) {
        this.car = car;
        this.api = new RaceApi();
        this.render();
        this.handleEvents();
    }
    private render() {
        // document.body.insertAdjacentHTML('beforeend', this.getHTML(this.car));
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('modal__window', 'border', 'rounded');
        document.body.append(this.wrapper);
        this.wrapper.insertAdjacentHTML('beforeend', this.getHTML(this.car));
    }
    private getHTML(car: Car) {
        return `   
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="input-name-${car.id}" class="col-form-label h1">Name</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="input-name-${car.id}" class="form-control" placeholder="${car.getCarName}">
                </div>

            </div>
            <div class="modal-color__container">
                <p class="h6">Color</p>
                <!-- <div class="modal-color border rounded"></div> -->
                <input type="color" id="input-color-${car.id}" class="modal-color form-control form-control-color" value="${car.getColor}">
            </div>
            <div class="modal__btn-container">
                <button id="btn-modal-cancel-${car.id}" class="btn btn-warning">Cancel</button>
                <button id="btn-modal-accept-${car.id}" class="btn btn-success">Accept</button>
            </div>
            <button id="btn-modal-close-${car.id}" class="modal-close btn rounded-circle border">X</button>
        `;
    }

    private handleEvents() {
        const btnCancel = document.getElementById(`btn-modal-cancel-${this.car.id}`) as HTMLButtonElement;
        const btnClose = document.getElementById(`btn-modal-close-${this.car.id}`) as HTMLButtonElement;
        const btnAccept = document.getElementById(`btn-modal-accept-${this.car.id}`) as HTMLButtonElement;
        const inputColor = document.getElementById(`input-color-${this.car.id}`) as HTMLInputElement;
        const inputName = document.getElementById(`input-name-${this.car.id}`) as HTMLInputElement;
        if (!btnCancel || !btnClose || !btnAccept || !inputColor || !inputName) throw new Error('no modal elems!');
        btnCancel.onclick = () => this.removeModal();
        btnClose.onclick = () => this.removeModal();
        btnAccept.onclick = (e) => this.updateCar(e, inputColor, inputName);
    }
    removeModal() {
        this.wrapper?.remove();
    }
    updateCar(e: Event, inputColor: HTMLInputElement, inputName: HTMLInputElement) {
        const color = inputColor.value;
        const name = inputName.value;
        this.car.color = color;
        this.car.carName = name;
        this.api.updateCar(this.car.id, {
            name: this.car.getCarName,
            color: this.car.getColor as string,
        });
    }
}

export class ModalCreateCar {
    private wrapper: HTMLDivElement | undefined;
    api: RaceApi;
    id: number;
    constructor() {
        this.id = randomInt(1000, 2000);
        this.api = new RaceApi();
        this.render();
        this.handleEvents();
    }
    private render() {
        // document.body.insertAdjacentHTML('beforeend', this.getHTML(this.car));
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('modal__window', 'border', 'rounded');
        document.body.append(this.wrapper);
        this.wrapper.insertAdjacentHTML('beforeend', this.getHTML(this.id));
    }
    private getHTML(id: number) {
        return `
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="input-name-${id}" class="col-form-label h1">Name</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="input-name-${id}" class="form-control" value="${generateRandomCar()}">
                </div>

            </div>
            <div class="modal-color__container">
                <p class="h6">Color</p>
                <!-- <div class="modal-color border rounded"></div> -->
                <input type="color" id="input-color-${id}" class="modal-color form-control form-control-color" value="${generateRandomColor()}">
            </div>
            <div class="modal__btn-container">
                <button id="btn-modal-cancel-${id}" class="btn btn-warning">Cancel</button>
                <button id="btn-modal-accept-${id}" class="btn btn-success">Accept</button>
            </div>
            <button id="btn-modal-close-${id}" class="modal-close btn rounded-circle border">X</button>
        `;
    }

    private handleEvents() {
        const btnCancel = document.getElementById(`btn-modal-cancel-${this.id}`) as HTMLButtonElement;
        const btnClose = document.getElementById(`btn-modal-close-${this.id}`) as HTMLButtonElement;
        const btnAccept = document.getElementById(`btn-modal-accept-${this.id}`) as HTMLButtonElement;
        const inputColor = document.getElementById(`input-color-${this.id}`) as HTMLInputElement;
        const inputName = document.getElementById(`input-name-${this.id}`) as HTMLInputElement;
        if (!btnCancel || !btnClose || !btnAccept || !inputColor || !inputName) throw new Error('no modal elems!');
        btnCancel.onclick = () => this.removeModal();
        btnClose.onclick = () => this.removeModal();
        btnAccept.onclick = (e) => this.createCar(e, inputColor, inputName);
    }
    removeModal() {
        this.wrapper?.remove();
    }
    createCar(_e: Event, inputColor: HTMLInputElement, inputName: HTMLInputElement) {
        const color = inputColor.value;
        const name = inputName.value;
        this.api
            .createCar({
                name: name,
                color: color as string,
            })
            .then(() => {
                const event = new CustomEvent('renderCars');
                window.dispatchEvent(event);
            });
    }
}
