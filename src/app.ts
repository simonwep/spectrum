import {registerSW} from 'virtual:pwa-register';
import './styles/_index.scss';

// Log build date
console.log(`Build from ${new Date(env.BUILD_TIMESTAMP).toLocaleString()}`);

// Perform compatibility check
if (!('OfflineAudioContext' in window) || !('suspend' in window.OfflineAudioContext.prototype)) {
    document.getElementById('incompatible')?.classList.add('visible');
} else {
    registerSW();
    import('./setup');
}
