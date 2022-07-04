export type ApiData = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

export interface ISourcesData {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISources {
    status: string;
    sources: ISourcesData[];
}

export interface IAllNews {
    status: string;
    totalResults: number;
    articles: INews[];
    sources?: ISourcesData[];
}

export interface INews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface ICallbackNews {
    (data: IAllNews): void;
}
export interface ICallbackSources {
    (data: ISources): void;
}

// export type Callback<T, U> = (data: T) => U;

export type Callback<T> = (data?: T) => void;
// export type Callback<T, U> = (data: T) => U;
export interface IMyApi {
    apiKey: string;
}
