import { render } from 'preact';
import { registerSW } from 'virtual:pwa-register';
import { App } from './app/App';
import './styles/_global.scss';

render(<App />, document.getElementById('app') as HTMLElement);
registerSW();
