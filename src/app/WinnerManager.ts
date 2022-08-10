import RaceApi, { winner } from './api';
import { Car } from './car';
import { getForms } from './htmlPatterns';

class WinnersManager {
    winners: winner[] | undefined;
    api: RaceApi;
    page: number;
    limit: number;
    winnerBtn: HTMLButtonElement;
    wrapper: HTMLElement;
    winnersInPage: number;
    wrapperRace: HTMLElement;
    orderQuery: 'ASC' | 'DESC' | undefined;
    sortQuery: 'id' | 'wins' | 'time' | undefined;
    constructor() {
        this.api = new RaceApi();
        this.page = 1;
        this.limit = 10;
        this.winnersInPage = 2;
        this.winnerBtn = document.getElementById('btn-winners') as HTMLButtonElement;
        this.wrapper = document.getElementById('winner-wrapper') as HTMLElement;
        this.wrapperRace = document.getElementById('race-road__wrapper') as HTMLElement;
        this.render();
        this.renderItems();
        this.init();
    }
    private async init() {
        this.winners = await this.api.getWinners();
    }
    async updateWinner(car: Car, time: number) {
        const winner = await this.api.getWinnerById(car.id);
        if (this.isObjectEmpty(winner)) {
            this.api.createWinner({
                id: car.id,
                time: time,
                wins: 1,
            });
        } else {
            this.api.updateWinners(car.id, {
                wins: ++winner.wins,
                time: time,
            });
            this.winners = await this.api.getWinners();
        }
        //
        this.winners = await this.api.getWinners();
        // this.updateRender();
        this.render();
    }
    private handleEvents() {
        const numberOfPage = document.querySelector('.winners-nav__page-number') as HTMLHeadingElement;
        const nextBtn = document.getElementById('btn-win-next') as HTMLButtonElement;
        const prevBtn = document.getElementById('btn-win-prev') as HTMLButtonElement;
        const orderRadioGroup = document.getElementById('order-radio-group') as HTMLElement;
        const sortRadioGroup = document.getElementById('sort-radio-group') as HTMLElement;
        if (!numberOfPage || !nextBtn || !prevBtn || !orderRadioGroup || !sortRadioGroup)
            throw new Error('no winner elems bnt');
        this.winnerBtn.onclick = () => {
            this.wrapper.classList.remove('hidden');
            this.wrapperRace.classList.add('hidden');
        };
        nextBtn.onclick = () => {
            this.page = this.winnersInPage === this.limit ? ++this.page : this.page;

            numberOfPage.textContent = this.page + '';
            this.renderItems();
        };
        prevBtn.onclick = () => {
            this.page = this.page === 1 ? 1 : --this.page;
            numberOfPage.textContent = this.page + '';

            this.renderItems();
        };
        orderRadioGroup.oninput = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.dataset.sortType) this.orderQuery = target.dataset.sortType as 'DESC' | 'ASC';
            this.updateRender();
        };
        sortRadioGroup.oninput = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.dataset.sortType) this.sortQuery = target.dataset.sortType as 'id' | 'wins' | 'time';
            this.updateRender();
        };
        this.wrapper.onclick = (e) => {
            const tagret = e.target as HTMLElement;
            const tagretDataset = tagret.dataset;
            const id = tagretDataset.deleteid;
            if (id) {
                this.api.deleteWinner(+id);
                this.updateRender();
            }
        };
    }
    private isObjectEmpty(object: Record<string, unknown>): boolean {
        for (const property in object) {
            return false;
        }
        return true;
    }
    private async render() {
        this.winners = await this.api.getWinners(this.page, this.limit);
        this.winnersInPage = this.winners.length;
        const html = `

        ${getForms()}
        <div class="winners__header">
            <h2 class="header-id">id</h2>
            <h2 class="header-time">time</h2>
            <h2 class="header-wins">wins</h2>
        </div>

        </div>
        <div class="winners__container"></div>
        <div class="winners-nav">
            <button id="btn-win-prev" class="winners-nav__button btn btn-primary">Prev</button>
            <h2 id ="winner-page" class="winners-nav__page-number">${this.page}</h2>
            <button id="btn-win-next" class="winners-nav__button btn btn-primary">Next</button>
        </div>
        `;
        if (this.wrapper) this.wrapper.innerHTML = html;
        this.handleEvents();
    }
    private async renderItems(sort?: 'id' | 'wins' | 'time' | undefined, order?: 'ASC' | 'DESC' | undefined) {
        const winners = await this.api.getWinners(this.page, this.limit, sort, order);
        this.winnersInPage = winners.length;
        this.clearWinners();
        const itemContainer = document.querySelector('.winners__container') as HTMLElement;
        const getHTML = (winner: winner) => {
            return ` 
            <div class="winners__item border rounded">
                <p class="winners__position">${winner.id}</p>
                <p class="winners__time">${winner.time}</p>
                <p class="winners__wins">${winner.wins}</p>
                <div class="winners__car-icon">
                <button id="btn-win-delete-${winner.id}" data-deleteid="${winner.id}" class="btn btn-danger">delete</button>
                </div>
            </div>
            `;
        };
        winners.forEach((winner) => itemContainer.insertAdjacentHTML('beforeend', getHTML(winner)));
    }

    public updateRender() {
        this.renderItems(this.sortQuery, this.orderQuery);
    }

    private clearWinners() {
        const winners = document.querySelectorAll('.winners__item');
        winners.forEach((i) => i.remove());
    }
}
export default WinnersManager;
