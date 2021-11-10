import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './ListSection.module.css';

export type ListSectionProps = ComponentBaseProps & {
  title?: string;
};

export function ListSection(props: ListSectionProps): h.JSX.Element & any {
  return (
    <div className={styles.root}>
      {props.title ? <div className={styles.title}>{props.title}</div> : null}
      {props.children}
    </div>
  );
}
