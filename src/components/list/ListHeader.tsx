import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import styles from './ListHeader.module.css';

type Props = ComponentBaseProps & {
  type: 'header' | 'subheader' | 'section';
};

export function ListHeader(props: Props): h.JSX.Element & any {
  return <div className={styles.root}>{props.children}</div>;
}
