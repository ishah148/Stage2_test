import { RuntimeGlobals } from 'webpack';
import RaceApi, { car, startStopResp, status, winner } from './api';
import { Car } from './car';
import { generateRandomCar, generateRandomColor, randomInt } from './carsModelList';
import { ModalWindow, ModalCreateCar } from './ModalWindows';
import WinnersManager from './WinnerManager';

class Race {
    winners: winner[];
    api: RaceApi;
    carsSpeed: startStopResp[];
    constructor() {
        this.winners = [];
        this.carsSpeed = [];
        this.api = new RaceApi();
        // this.startRace();
    }

    async startEngines(cars: car[]): Promise<startStopResp[]> {
        const carsArr = cars.map(async (car) => await this.api.startEngine(car.id));
        this.carsSpeed = await Promise.all(carsArr);
        return await Promise.all(carsArr);
    }
    async startDriving(cars: car[]) {
        const carsArr = cars.map(async (car) => await this.api.driveCar(car.id));
        return carsArr;
    }
}

class RaceManager extends Race {
    winners: winner[];
    private page: number;
    private carsInPage: number;
    private winnerManager: WinnersManager;
    private modalWindow!: ModalWindow;
    private timesArr: Array<number>;
    cars!: Car[];
    carsData!: car[];
    timesArrMap: Map<Car, number>;
    limit: number;
    carsXCount!: number | string;
    status: 'wait' | 'race';

    constructor() {
        super();
        this.winnerManager = new WinnersManager();
        this.handleEvents();
        this.winners = [];
        this.page = 1;
        this.carsInPage = 7;
        this.limit = 7;
        // this.updateData();
        // this.renderCars();

        this.timesArr = [];
        this.status = 'wait';
        this.timesArrMap = new Map();
        this.init();
    }
    async init() {
        await this.updateData();
        this.renderCars();
    }
    async updateData() {
        this.cars = [];
        this.carsData = await this.api.getCars(this.page, this.limit);
        // this.carsData.forEach((car) => this.cars.push(new Car(car.id, car.color, car.name)));
        this.winners = await this.api.getWinners();
    }
    updateSpeedCar(car: car, time: startStopResp): Car {
        const targetCar = this.cars.find((carI) => carI.id === car.id);
        if (targetCar) targetCar.winTime = time.distance / time.velocity;

        return targetCar as Car;
    }
    async startOneCar(car: car, isRace?: boolean) {
        const time = await super.startEngines([car]);
        const targetCar = this.updateSpeedCar(car, time[0]);
        targetCar.updateElems();
        targetCar.start();
        const status = await this.api.driveCar(car.id);
        if (status.success) {
            const result = +(time[0].distance / time[0].velocity / 1000).toFixed(3);

            targetCar.result = result + 's';
            if (isRace) this.timesArrMap.set(targetCar, result);
            if (isRace) this.checkWinner();
        }
        if (status.code === 500) {
            targetCar.stop();
            targetCar.result = 'broke :(';
            if (isRace) this.timesArrMap.set(targetCar, 0);
            if (isRace) this.checkWinner();
        }
        return time;
    }

    async startAllCars() {
        this.status = 'race';
        this.checkDisabledButtons();
        const slicedCars = this.carsData;
        const time = await super.startEngines(slicedCars);

        slicedCars.forEach((car) => this.startOneCar(car, true));
    }

    checkWinner() {
        if (this.timesArrMap.size === this.carsData.length) {
            const temp = new Map([...this.timesArrMap].sort((a, b) => a[1] - b[1]));
            const winner = [...temp].filter((i) => i[1] !== 0)[0][0];
            const time = [...temp].filter((i) => i[1] !== 0)[0][1];
            winner.result = 'Winner!' + time;
            this.winnerManager.updateWinner(winner, time);
            setTimeout(() => {
                alert(`winner is ${winner.getCarName};  time - ${time}`);
            }, 200);
            setTimeout(() => {
                this.status = 'wait';
                this.finishRace([...temp.keys()]);
            }, 3500);
        }
        this.api.getWinners().then((res) => (this.winners = res));
    }
    finishRace(cars: Car[]) {
        cars.forEach((car) => {
            if (car) {
                this.api.stopEngine(car.id);
                car.stop();
                car.reset();
                car.result = '';
            }
        });
        this.timesArrMap = new Map();
        this.status = 'wait';
        this.checkDisabledButtons();
        this.winnerManager.updateRender();
    }

    handleEvents() {
        const numberOfPage = document.querySelector('.race-nav__page-number') as HTMLHeadingElement;
        const nextBtn = document.getElementById('btn-race-next') as HTMLButtonElement;
        const prevBtn = document.getElementById('btn-race-prev') as HTMLButtonElement;
        const startBtn = document.getElementById('btn-startAll') as HTMLButtonElement;
        const garageBtn = document.getElementById('btn-garage') as HTMLButtonElement;
        const wrapperWinner = document.getElementById('winner-wrapper') as HTMLElement;
        const wrapper = document.getElementById('race-road__wrapper') as HTMLElement;
        const addOneCarBnt = document.getElementById('btn-add-one-car') as HTMLButtonElement;
        const addManyCarsBnt = document.getElementById('btn-add-many-cars') as HTMLButtonElement;
        if (!addManyCarsBnt || !addOneCarBnt) throw new Error('no add btn');
        if (!numberOfPage || !wrapper || !wrapperWinner || !garageBtn || !startBtn || !prevBtn || !nextBtn)
            throw new Error('no raceMan elems!');

        garageBtn.onclick = () => {
            wrapper.classList.remove('hidden');
            wrapperWinner.classList.add('hidden');
        };
        startBtn.onclick = () => this.startAllCars();
        nextBtn.onclick = () => {
            this.page = this.carsInPage === this.limit ? ++this.page : this.page;

            numberOfPage.textContent = this.page + '';
            this.renderCars();
        };
        prevBtn.onclick = () => {
            this.page = this.page === 1 ? 1 : --this.page;
            numberOfPage.textContent = this.page + '';

            this.renderCars();
        };

        addOneCarBnt.onclick = () => new ModalCreateCar();
        addManyCarsBnt.onclick = () => {
            for (let i = 0; i < 100; i++) {
                this.api.createCar({
                    name: generateRandomCar(),
                    color: generateRandomColor() as string,
                });
            }
        };
        window.addEventListener('renderCars', (() => {
            this.renderCars();
        }) as EventListener);
        this.handleCarsButtons();
    }
    handleCarsButtons() {
        const wrapper = document.getElementById('race-road__wrapper') as HTMLElement;
        wrapper.addEventListener('click', (e) => {
            const tagret = e.target as HTMLElement;
            const tagretDataset = tagret.dataset;
            const id = tagret.id.split('-')[3];

            const car: car | undefined = this.carsData.find((i) => i.id === +id);
            const carClass: Car | undefined = this.cars.find((i) => i.id === +id);
            switch (tagretDataset.action) {
                case 'start':
                    if (car) this.startOneCar(car, false);

                    break;
                case 'delete':
                    if (car) this.api.deleteCar(car.id);

                    this.renderCars();
                    break;
                case 'update':
                    if (carClass) new ModalWindow(carClass);

                    break;
                case 'reset':
                    if (car) this.api.stopEngine(car.id);

                    if (carClass) carClass.stop();
                    if (carClass) carClass.reset();
                    if (carClass) carClass.result = '';
                    this.renderCars();
                    break;

                default:
                    break;
            }
        });
    }

    async renderCars() {
        const count = document.getElementById('total-count') as HTMLSpanElement;
        if (!count) throw new Error('error total count');
        this.carsXCount = await this.api.getCountCars(this.page, this.limit);
        const slicedCars = await this.api.getCars(this.page, this.limit);
        this.carsData = await this.api.getCars(this.page, this.limit);
        count.textContent = this.carsXCount;
        this.carsInPage = this.carsData.length;
        this.clearCars();
        const slicedCarsClass = slicedCars.map((car) => this.createCarClass(car));
        this.cars = slicedCarsClass;
        slicedCars.forEach((car) => {
            const carClass = this.createCarClass(car);
            carClass.render();
        });
    }

    checkDisabledButtons() {
        const btn1 = document.querySelectorAll('[data-action="start"]');
        const btn2 = document.querySelectorAll('[data-action="reset"]');
        const btn3 = document.querySelectorAll('[data-action="update"]');
        const btn4 = document.querySelectorAll('[data-action="delete"]');
        const btn5 = document.getElementById('btn-add-many-cars');
        const btn6 = document.getElementById('btn-add-one-car');
        const btn7 = document.getElementById('btn-race-next');
        const btn8 = document.getElementById('btn-race-prev');
        const btn9 = document.getElementById('btn-startAll');

        const arr = [...btn1, ...btn2, ...btn3, ...btn3, ...btn4, btn5, btn6, btn7, btn8, btn9];
        if (this.status === 'race') {
            arr.forEach((i) => {
                if (i) i.setAttribute('disabled', '');
            });
        }
        if (this.status === 'wait') {
            arr.forEach((i) => {
                if (i) i.removeAttribute('disabled');
            });
        }
    }
    clearCars() {
        const cars = document.querySelectorAll('.race-road__container');
        cars.forEach((i) => i.remove());
    }
    createCarClass(car: car) {
        return new Car(car.id, car.color, car.name);
    }
}
export default RaceManager;

//
//
