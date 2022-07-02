import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { aaaa } from '../test';
class App {
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        console.log(aaaa);
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
