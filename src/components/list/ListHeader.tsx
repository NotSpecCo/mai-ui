import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './ListHeader.module.css';

export type ListHeaderProps = ComponentBaseProps & {
  type: 'header' | 'subheader' | 'section';
};

export function ListHeader(props: ListHeaderProps): h.JSX.Element & any {
  return <div className={styles.root}>{props.children}</div>;
}
