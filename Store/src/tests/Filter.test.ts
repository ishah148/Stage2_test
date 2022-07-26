import { Filter } from '../service/Filter';
import { testData } from './testData';
import { IFilter } from '../types/types';

test('check filter for Color', () => {
    const filterObj: IFilter = {
        camResolution: [],
        color: ['grey'],
        company: [],
        isPopular: false,
        priceFrom: 1,
        priceTo: 1000,
        yearFrom: 2010,
        yearTo: 2022,
    };
    const filter = new Filter(filterObj, testData);
    expect(filter.filterData()).toMatchObject([
        {
            camResolution: '8 Mp',
            color: 'grey',
            company: 'realme',
            description: 'none',
            id: 2,
            imageSrc: './assets/images/realmegrey.webp',
            inCart: false,
            name: 'realme c25',
            onStorage: 3,
            price: 300,
            year: 2012,
        },
        {
            camResolution: '64 Mp',
            color: 'grey',
            company: 'apple',
            description: 'none',
            id: 11,
            imageSrc: './assets/images/iphone11black.webp',
            inCart: false,
            name: 'iphone 13 128gb',
            onStorage: 10,
            price: 950,
            year: 2021,
        },
    ]);
});

test('check filter for Company', () => {
    const filterObj: IFilter = {
        camResolution: [],
        color: [],
        company: ['xiaomi'],
        isPopular: false,
        priceFrom: 1,
        priceTo: 1000,
        yearFrom: 2010,
        yearTo: 2022,
    };
    const filter = new Filter(filterObj, testData);
    expect(filter.filterData()).toMatchObject([
        {
            camResolution: '12 Mp',
            color: 'blue',
            company: 'xiaomi',
            description: 'none',
            id: 1,
            imageSrc: './assets/images/redmi9c.webp',
            inCart: false,
            name: 'redmi 9c',
            onStorage: 2,
            price: 250,
            year: 2020,
        },
    ]);
});

test('check filter for Camera Resolution', () => {
    const filterObj: IFilter = {
        camResolution: ['64 Mp'],
        color: [],
        company: [],
        isPopular: false,
        priceFrom: 1,
        priceTo: 1000,
        yearFrom: 2010,
        yearTo: 2022,
    };
    const filter = new Filter(filterObj, testData);
    expect(filter.filterData()).toMatchObject([
        {
            camResolution: '64 Mp',
            color: 'black',
            company: 'apple',
            description: 'none',
            id: 5,
            imageSrc: './assets/images/iphone11black.webp',
            inCart: false,
            name: 'iphone 11',
            onStorage: 10,
            price: 550,
            year: 2021,
        },
        {
            camResolution: '64 Mp',
            color: 'grey',
            company: 'apple',
            description: 'none',
            id: 11,
            imageSrc: './assets/images/iphone11black.webp',
            inCart: false,
            name: 'iphone 13 128gb',
            onStorage: 10,
            price: 950,
            year: 2021,
        },
    ]);
});

test('check uislider filters', () => {
    const filterObj: IFilter = {
        camResolution: [],
        color: [],
        company: [],
        isPopular: false,
        priceFrom: 171,
        priceTo: 791,
        yearFrom: 2012,
        yearTo: 2020,
    };
    const filter = new Filter(filterObj, testData);
    expect(filter.filterData()).toMatchObject([
        {
            camResolution: '16 Mp',
            color: 'green',
            company: 'zte',
            description: 'none',
            id: 9,
            imageSrc: './assets/images/somechinephonegreen.webp',
            inCart: false,
            name: 'zte blade v8',
            onStorage: 15,
            price: 250,
            year: 2017,
        },
    ]);
});

test('check for absence of products matching the filter', () => {
    const filterObj: IFilter = {
        camResolution: ['64 Mp'],
        color: ['grey', 'black'],
        company: ['xiaomi', 'zte'],
        isPopular: false,
        priceFrom: 171,
        priceTo: 521,
        yearFrom: 2012,
        yearTo: 2020,
    };
    const filter = new Filter(filterObj, testData);
    expect(filter.filterData()).toMatchObject([]);
});
