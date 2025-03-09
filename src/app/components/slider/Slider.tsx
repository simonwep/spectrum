import { createRef, FunctionalComponent } from 'preact';
import styles from './Slider.module.scss';

interface Props {
  value: number;
  onChange: (v: number) => void;
}

export const Slider: FunctionalComponent<Props> = (props) => {
  const slider = createRef<HTMLDivElement>();
  let width = 0;
  let startX = 0;

  const pointerDown = (evt: PointerEvent) => {
    window.addEventListener('pointermove', pointerMove);
    window.addEventListener('pointerup', pointerUp);
    window.addEventListener('pointercancel', pointerUp);
    window.addEventListener('pointerleave', pointerUp);
    startX = slider.current?.getBoundingClientRect().left ?? 0;
    width = slider.current?.clientWidth ?? 0;
    pointerMove(evt);
  };

  const pointerMove = (evt: PointerEvent) => {
    const v = (evt.clientX - startX) / width;
    props.onChange(Math.max(0, Math.min(1, v)));
  };

  const pointerUp = () => {
    window.removeEventListener('pointermove', pointerMove);
    window.removeEventListener('pointerup', pointerUp);
    window.removeEventListener('pointercancel', pointerUp);
    window.removeEventListener('pointerleave', pointerUp);
  };

  return <div ref={slider} className={styles.slider} onPointerDown={pointerDown} style={{ '--value': props.value }} />;
};
