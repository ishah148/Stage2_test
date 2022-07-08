// export const aaaa: Array<number> = [1, 2, 3, 4];

// let text: string = '2123123';
// text = '1';
// console.log(text);

// function foo(a: string): void {
//     console.log(a);
// }

// console.log(foo('def'));

// interface Tesk {
//     id: number;
//     name: string;
// }

// const ttt: Tesk = {
//     id: 1,
//     name: 'ttt',
// };

// // const header: HTMLElement | null = document.querySelector('header');
// // console.log(header);

// // class Loader {
// //     readonly baseLink: string;

// //     public options: { [key: string]: string };

// //     constructor(baseLink: string, options: { [key: string]: string }) {
// //         this.baseLink = baseLink;
// //         this.options = options;
// //     }

// //     getResp<T>(
// //         { endpoint, options }: { endpoint: string; options?: { [key: string]: string } },
// //         callback: Callback<T> = () => {
// //             console.error('No callback for GET response');
// //         }
// //     ): void {
// //         this.load('GET', endpoint, callback, options);
// //     }

// //     errorHandler(res: Response): Response {
// //         if (!res.ok) {
// //             if (res.status === 401 || res.status === 404)
// //                 console.log(Sorry, but there is ${ res.status } error: ${ res.statusText });
// //             throw Error(res.statusText);
// //         }

// //         return res;
// //     }

// //     makeUrl(options: { [key: string]: string }, endpoint: string): string {
// //         const urlOptions: { [key: string | number]: string } = { ...this.options, ...options };
// //         let url = ${ this.baseLink }${ endpoint }?;

// //         Object.keys(urlOptions).forEach((key) => {
// //             url += ${ key }=${ urlOptions[key] }&;
// //         });

// //         return url.slice(0, -1);
// //     }

// //     load<T>(
// //         method: string,
// //         endpoint: string,
// //         callback: Callback<T>,
// //         options: { [key: string]: string } = {}
// //     ): void {
// //         fetch(this.makeUrl(options, endpoint), { method })
// //             .then(this.errorHandler)
// //             .then((res) => res.json())
// //             .then((data) => callback(data))
// //             .catch((err) => console.error(err));
// //     }
// // }
