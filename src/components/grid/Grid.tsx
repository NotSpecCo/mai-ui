import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './Grid.module.css';

export type GridProps = ComponentBaseProps & {};

export function Grid(props: GridProps): h.JSX.Element & any {
  return <div className={styles.root}>{props.children}</div>;
}
