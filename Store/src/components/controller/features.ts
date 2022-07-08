import { INews } from '../../types/types';
import { IAllNews } from '../types/types';
import News from '../view/news/news';

class Features {
    apiKey: string;
    urlHeadlines: string;
    news: News;
    apiServer: string;
    constructor() {
        this.news = new News();
        this.apiServer = 'https://nodenews.herokuapp.com/';
        this.apiKey = 'd6658825c2bd437491655a50e7cdc12a';
        this.urlHeadlines = this.apiServer + 'top-headlines?country=ru&pageSize=30&apiKey=';
    }
    init() {
        this.drawNews(`${this.urlHeadlines}${this.apiKey}`);
        this.addAdaptiveSoursesBtn();
        this.addSearch();
    }
    async drawNews(url: string) {
        const data = await this.getNewsData(url);
        this.news.draw(data);
    }

    async getNewsData(url: string): Promise<INews[]> {
        const response = await fetch(url);
        const data: IAllNews = await response.json();
        return data.articles;
    }

    addAdaptiveSoursesBtn() {
        const sourcesContainer = document.getElementById('sources-container') as HTMLElement;
        const openButtonHTML: string = `
        <button id="open-sources" class="source__item header--button"> Show Sources </button>`;
        document.querySelector('header')?.insertAdjacentHTML('beforeend', openButtonHTML);
        const openButton = document.getElementById('open-sources') as HTMLElement;
        openButton.onclick = () => {
            sourcesContainer.classList.toggle('open');
        };
    }

    addSearch() {
        const formHTML: string = `    
        <form id = "form" >
            <input type ="text" placeholder="Search" name="find" class="header__form-form"/>
            <input type="submit" value = "find" class="header__form-button"/>
        </form>`;
        document.querySelector('header')?.insertAdjacentHTML('beforeend', formHTML);
        const form = document.getElementById('form') as HTMLFormElement;
        form.addEventListener('submit', this.findNews.bind(this));
    }

    findNews(e: SubmitEvent): void {
        e.preventDefault();
        const targetValue = ((e.target as HTMLFormElement)[0] as HTMLInputElement).value;
        this.drawNews(`${this.apiServer}/everything?q=${targetValue}&apiKey=${this.apiKey}`);
    }
}

export default Features;
