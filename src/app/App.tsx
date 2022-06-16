import { Canvas } from '@components/canvas/Canvas';
import { Header } from '@components/header/Header';
import { FunctionalComponent } from 'preact';
import styles from './App.module.scss';

export const App: FunctionalComponent = () => (
  <div className={styles.app}>
    <Header />
    <Canvas />
  </div>
);
