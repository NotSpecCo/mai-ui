import { h } from 'preact';
import { SelectablePriority } from '../../enums';
import { AppBar } from './AppBar';
import styles from './AppMenuContent.module.css';

export interface AppMenuContentProps {
  onClose: () => void;
}

export function AppMenuContent(props: AppMenuContentProps): h.JSX.Element {
  return (
    <div className={styles.root}>
      <div
        className={styles.scroller}
        data-selectable-scroller={SelectablePriority.Medium}
      ></div>
      <AppBar leftIcon="cancel" rightIcon={null} />
    </div>
  );
}
