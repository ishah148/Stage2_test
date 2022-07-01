import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd6658825c2bd437491655a50e7cdc12a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
