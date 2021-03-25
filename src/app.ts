import {registerSW} from 'virtual:pwa-register';
import {setup} from './setup';
import './styles/_index.scss';

// Perform compatibility check
if (!('OfflineAudioContext' in window) || !('suspend' in window.OfflineAudioContext.prototype)) {
    document.getElementById('incompatible')?.classList.add('visible');
} else {
    registerSW();
    setup();
}
