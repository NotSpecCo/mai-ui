import { h } from 'preact';
import { useNavKeys } from '../../hooks/useNavKeys';
import { ComponentBaseProps } from '../../models';
import { ifClass, joinClasses } from '../../utils/classes';
import styles from './View.module.css';

export type ViewProps = ComponentBaseProps & {
  backgroundImageUrl?: string;
  backgroundShift?: number;
  accentColor?: string;
  enableBackdrop?: boolean;
  id?: number;
  enableCustomColor?: boolean;
};

export function View({
  enableBackdrop = true,
  ...props
}: ViewProps): h.JSX.Element & any {
  function getAccentColor(): string {
    return props.accentColor ? props.accentColor : 'inherit';
  }

  useNavKeys(
    {
      Backspace: () => {
        // If on the main screen, let KaiOS minimize the app
        if (window.location.pathname.includes('/podcasts')) {
          return false;
        }
        window.history.back();
      },
    },
    { stopPropagation: true }
  );

  return (
    <div
      className={joinClasses(styles.root)}
      style={{
        backgroundImage: props.backgroundImageUrl
          ? `url(${props.backgroundImageUrl})`
          : 'none',
        backgroundPositionX:
          props.backgroundShift !== undefined
            ? `${props.backgroundShift}%`
            : '50%',
        backgroundPositionY: 'top',
        '--app-accent-color': getAccentColor(),
        '--accent-text-color': getAccentColor(),
        '--highlight-bg-color': getAccentColor(),
        '--menubar-bar-color': getAccentColor(),
      }}
    >
      <div
        className={joinClasses(
          styles.backdrop,
          ifClass(enableBackdrop, styles.scrim)
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
