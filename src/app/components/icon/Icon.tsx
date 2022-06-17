import { icons } from './icons';
import { FunctionalComponent } from 'preact';
import styles from './Icon.module.scss';

interface Props {
  icon: keyof typeof icons;
}

export const Icon: FunctionalComponent<Props> = (props) => (
  <span className={styles.icon}>{icons[props.icon]}</span>
);
