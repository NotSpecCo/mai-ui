import { h } from 'preact';
import { SelectablePriority } from '../../enums';
import { ComponentBaseProps } from '../../models';
import { SvgIcon } from '../SvgIcon';
import styles from './AppMenu.module.css';

export type AppMenuProps = ComponentBaseProps & {
  onClose?: () => void;
};

export function AppMenu(props: AppMenuProps): h.JSX.Element {
  return (
    <div className={styles.root}>
      <div
        className={styles.scroller}
        data-selectable-scroller={SelectablePriority.Medium}
      >
        {props.children}
      </div>
      <div className={styles.bar}>
        <SvgIcon icon="cancel" />
      </div>
    </div>
  );
}
