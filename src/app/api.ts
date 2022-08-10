export type car = {
    name: string;
    color: string;
    id: number;
};
export type status = {
    success: boolean;
    code?: number;
};
export type startStopResp = {
    velocity: number;
    distance: number;
};
export type winner = {
    id: number;
    time: number;
    wins: number;
};
class RaceApi {
    localPath: string;
    urlEngine: string;
    urlGarage: string;
    urlWinners: string;
    constructor() {
        this.localPath = 'http://127.0.0.1:3000';
        this.urlGarage = 'http://127.0.0.1:3000/garage/';
        this.urlEngine = 'http://127.0.0.1:3000/engine/';
        this.urlWinners = 'http://127.0.0.1:3000/winners/';
    }

    getAllCars = async (): Promise<car[]> => {
        return await (await fetch(this.urlGarage)).json();
    };

    getCars = async (page?: number, limit?: number): Promise<car[]> => {
        const resp = await fetch(`${this.urlGarage}?_page=${page}&_limit=${limit}`);
        const data = await resp.json();

        return data;
    };
    getCountCars = async (page?: number, limit?: number) => {
        const resp = await fetch(`${this.urlGarage}?_page=${page}&_limit=${limit}`);
        const data = resp.headers.get('X-Total-Count');

        if (data) return data;
        else return 'no info';
    };
    getCarById = async (id: number): Promise<car> => await (await fetch(this.urlGarage + '/' + id)).json();

    createCar = async (car: { name: string; color: string }) => {
        const resp = await fetch(this.urlGarage, {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await resp.json();
        return data;
    };

    deleteCar = async (id: number) => {
        return await fetch(`${this.urlGarage}${id}`, {
            method: 'DELETE',
        });
    };

    updateCar = async (id: number, obj: { name: string; color: string }): Promise<car[]> => {
        const resp = await fetch(`${this.urlGarage}${id}`, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await resp.json();

        return data;
    };
    // =============== engine ===============
    startEngine = async (id: number): Promise<startStopResp> => {
        const res = await fetch(`${this.urlEngine}?id=${id}&status=started`, { method: 'PATCH' });
        const data = await res.json();
        //
        return data;
    };
    stopEngine = async (id: number): Promise<startStopResp> => {
        const res = await fetch(`${this.urlEngine}?id=${id}&status=stopped`, { method: 'PATCH' });
        const data = await res.json();
        //
        return data;
    };
    driveCar = async (id: number): Promise<status> => {
        const resp = await fetch(`${this.urlEngine}?id=${id}&status=drive`, { method: 'PATCH' });
        if (resp.status === 200) return await resp.json();
        if (resp.status === 500) return { success: false, code: 500 };
        if (resp.status >= 400 || resp.status < 500) return { success: false, code: 404 };
        return await resp.json();
    };
    // =============== winners ===============
    getWinners = async (
        _page?: number,
        _limit?: number,
        _sort?: 'id' | 'wins' | 'time',
        _order?: 'ASC' | 'DESC'
    ): Promise<winner[]> => {
        const page = '_page=' + (_page || '') + '&';
        const limit = '_limit=' + (_limit || '') + '&';
        const sort = '_sort=' + (_sort || '') + '&';
        const order = '_order=' + (_order || '') + '&';
        const query = this.urlWinners + '?' + limit + sort + order + page;
        return await (await fetch(query)).json();
    };

    getWinnerById = async (id: number): Promise<winner> => await (await fetch(this.urlWinners + '/' + id)).json();

    createWinner = async (winner: winner): Promise<winner> => {
        const url: string = this.urlWinners;
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(winner),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await resp.json();
    };
    deleteWinner = async (id: number) => {
        return await (
            await fetch(`${this.urlWinners}${id}`, {
                method: 'DELETE',
            })
        ).json();
    };
    updateWinners = async (
        id: number,
        obj: {
            wins: number;
            time: number;
        }
    ) => {
        const resp = await fetch(`${this.urlWinners}${id}`, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await resp.json();
    };
}

export default RaceApi;
