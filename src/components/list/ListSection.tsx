import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './ListSection.module.css';

type Props = ComponentBaseProps & {
  title?: string;
};

export function ListSection(props: Props): h.JSX.Element & any {
  return (
    <div className={styles.root}>
      {props.title ? <div className={styles.title}>{props.title}</div> : null}
      {props.children}
    </div>
  );
}
