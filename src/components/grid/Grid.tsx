import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './Grid.module.css';

type Props = ComponentBaseProps & {};

export function Grid(props: Props): h.JSX.Element & any {
  return <div className={styles.root}>{props.children}</div>;
}
