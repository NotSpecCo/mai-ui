import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './ViewHeader.module.css';

export type ViewHeaderProps = ComponentBaseProps & {};

export function ViewHeader(props: ViewHeaderProps): h.JSX.Element & any {
  return <div className={styles.root}>{props.children}</div>;
}
