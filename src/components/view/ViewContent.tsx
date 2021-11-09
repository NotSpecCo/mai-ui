import { h } from 'preact';
import { SelectablePriority } from '../../enums';
import { ComponentBaseProps } from '../../models';
import styles from './ViewContent.module.css';

type Props = ComponentBaseProps & {};

export function ViewContent(props: Props): h.JSX.Element & any {
  return (
    <div
      className={styles.root}
      data-selectable-scroller={SelectablePriority.Low}
    >
      {props.children}
    </div>
  );
}
