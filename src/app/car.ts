export class Move {
    protected _car!: HTMLElement | null;
    private animationId!: number;
    protected distance: number;
    private time1: number;
    private time2: number;
    private _winTime!: number;
    private _speed: number;

    constructor(carID: number) {
        // this._speed = _speed;
        this.distance = 1;
        this._car = null;
        this.time1 = 0;
        this.time2 = 0;
        this._speed = 1;
    }
    protected start() {
        if (!this._winTime) {
            alert('there is no wintime!');
        }
        this.time1 = performance.now();
        if (this.distance > 95) return;
        this.animationId = requestAnimationFrame(() => this.step());
    }
    private step() {
        if (this._car) this._car.style.left = this.distance + '%';
        this.distance += this._speed;
        if (this.distance > 90) {
            this.stop();
            return;
        }
        this.time2 = performance.now();
        this._speed = 100 / ((1000 / (this.time2 - this.time1)) * (this._winTime / 1000));
        this.start();
    }
    protected stop() {
        cancelAnimationFrame(this.animationId);
        this.winTime = 1;
        // this.distance = 1;
        this.time1 = 0;
        this.time2 = 0;
    }
    set car(car: HTMLElement) {
        this._car = car;
    }
    set winTime(time: number) {
        this._winTime = time;
    }
}

export class Car extends Move {
    carID: string;
    private wrapper: HTMLElement;
    private _color: string | undefined;
    private carEl: HTMLElement | null | undefined;
    private roadEl: HTMLElement | null | undefined;
    private _carName: string;
    private _result: string;
    id: number;
    status: 'wait' | 'race' | 'reset';
    constructor(carID: number, color: string, name: string) {
        super(carID);
        this.id = carID;
        this.carID = 'car-' + carID;
        this._color = color;
        this._carName = name;
        this._result = '';
        this.wrapper = document.querySelector('.race-road__wrapper') as HTMLElement;
        // this.render();
        this.status = 'wait';
    }
    start(): void {
        this.status = 'race';
        super.start();
    }
    stop(): void {
        super.stop();
    }
    private getHTML() {
        return `
        <div class="race-road__container" id="race-road-container-${this.carID}">

            <div class="race-road__buttons">
                <button id="btn-start-${this.carID}" class="btn btn-success" data-action="start">Start</button>
                <button id="btn-stop-${this.carID}" class="btn btn-warning" data-action="update">Update</button>
                <button id="btn-reset-${this.carID}" class="btn btn-primary" data-action="reset">Reset</button>
                <button id="btn-delete-${this.carID}" class="btn btn-danger" data-action="delete">Delete</button>
            </div>

            <div class="race-road mx-3 my-3" id="road-${this.carID}">
                <div class="car" id="${this.carID}">
                ${this.generateSvg()}
                </div>
                <h4 class="race-road__name  text-center text-primary">${this._carName}</h4>
                <div class="finish"></div>
            </div>

        </div>

        `;
    }
    public updateElems() {
        this.carEl = document.getElementById(this.carID);
        this.roadEl = document.getElementById('road-' + this.carID);
        super.car = document.getElementById(this.carID) as HTMLElement;
    }
    public render() {
        this.wrapper.insertAdjacentHTML('beforeend', this.getHTML());
        this.updateElems();
        //
    }
    public updateRender() {
        this.updateElems();
        const HTML = `
            <div class="car" id="${this.carID}" id="${this.carID}" style="left:${this.distance}%">
            ${this.generateSvg()}
            </div>
            <h4 class="race-road__name text-center text-primary">${this._carName}
                <span class="text-primary">${' ' + this._result}</span>
            </h4>
            <div class="finish"></div>
        `;
        if (this.roadEl) this.roadEl.innerHTML = HTML;
    }

    private generateSvg() {
        // 65-122 65-80 81-96 90-122
        const code = this._carName.charCodeAt(0);
        const carImgId = code > 90 ? 3 : code > 75 ? 3 : code > 65 ? 1 : 1;
        return `
        <svg class="svg-car burger-menu__svg" target="_blank" style="fill:${this._color}">
            <use xlink:href="./assets/sprite_cars.svg#car${carImgId || 1}"></use>
        </svg>`;
    }
    public reset() {
        if (this._car) {
            this._car.style.left = '0%';
            this.distance = 0;
            this._result = '';
            this.status = 'reset';
            this.updateRender();
        }
        // } else throw new Error('no car 143');
    }
    set color(color: string) {
        this._color = color;
        this.updateRender();
    }
    get getColor() {
        return this._color;
    }
    set carName(name: string) {
        this._carName = name;
        this.updateRender();
    }
    get getCarName() {
        return this._carName;
    }
    set result(res: string) {
        if (this.status !== 'reset') this._result = res;
        this.updateRender();
    }
}
