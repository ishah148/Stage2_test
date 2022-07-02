export const aaaa: Array<number> = [1, 2, 3, 4];

let text: string = '2123123';
text = '1';
console.log(text);

function foo(a: string): void {
    console.log(a);
}

console.log(foo('def'));

interface Tesk {
    id: number;
    name: string;
}

const ttt: Tesk = {
    id: 1,
    name: 'ttt',
};

const header: HTMLElement | null = document.querySelector('header');
console.log(header);
