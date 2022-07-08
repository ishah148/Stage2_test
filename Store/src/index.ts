import App from './components/app/app';
import Features from './components/controller/features';
import './global.scss';

const app = new App();
app.start();
const features = new Features();
features.init();
