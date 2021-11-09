import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './ViewHeader.module.css';

type Props = ComponentBaseProps & {};

export function ViewHeader(props: Props): h.JSX.Element & any {
  return <div className={styles.root}>{props.children}</div>;
}
