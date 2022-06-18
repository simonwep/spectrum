import { FunctionalComponent } from 'preact';
import styles from './Icon.module.scss';
import { icons } from './icons';

interface Props {
  icon: keyof typeof icons;
}

export const Icon: FunctionalComponent<Props> = (props) => (
  <span className={styles.icon}>{icons[props.icon]}</span>
);
