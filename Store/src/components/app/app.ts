/* eslint-disable prettier/prettier */
import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';
import { ISources, IAllNews } from '../types/types';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) => {
            this.controller.getNews(e, (data) => this.view.drawNews(data as IAllNews));
        });
        this.controller.getSources((data) => this.view.drawSources(data as ISources));
    }
}

export default App;
