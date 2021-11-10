import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './List.module.css';

export type ListProps = ComponentBaseProps & {};

export function List(props: ListProps): any {
  return <div className={styles.root}>{props.children}</div>;
}
