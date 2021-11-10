import { h } from 'preact';
import { ComponentBaseProps } from '../models';
import styles from './LabeledRow.module.css';

export type LabeledRowProps = ComponentBaseProps & {
  label: string;
  text?: string | null;
};

export function LabeledRow(props: LabeledRowProps): h.JSX.Element & any {
  return (
    <div className={styles.root}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
