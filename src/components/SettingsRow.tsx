import { h } from 'preact';
import { ComponentBaseProps, SelectableProps } from '../models';
import { SelectableBase } from './SelectableBase';
import styles from './SettingsRow.module.css';

export type SettingsRowProps = ComponentBaseProps &
  SelectableProps & {
    label: string;
    control: any /* TODO: Fix */;
  };

export function SettingsRow(props: SettingsRowProps): h.JSX.Element & any {
  return (
    <SelectableBase className={styles.root} {...props.selectable}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.control}>{props.control}</div>
    </SelectableBase>
  );
}
