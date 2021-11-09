import { h } from 'preact';
import { useToast } from '../contexts/ToastProvider';
import { ifClass, joinClasses } from '../utils/classes';
import styles from './Toast.module.css';

export function Toast(): h.JSX.Element & any {
  const { message, showing } = useToast();

  return (
    <div className={joinClasses(styles.root, ifClass(showing, styles.show))}>
      <div>{message}</div>
    </div>
  );
}
