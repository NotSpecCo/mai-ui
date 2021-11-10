import { h } from 'preact';
import { forwardRef } from 'preact/compat';
import { ComponentBaseProps, SelectableProps } from '../models';
import { ifClass, joinClasses } from '../utils/classes';
import styles from './GridItem.module.css';
import { SelectableBase } from './SelectableBase';

export type GridItemProps = ComponentBaseProps &
  SelectableProps & {
    dimIfUnselected?: boolean;
    shortcutKey?: string | number;
    imageUrl: string;
    onClick?: () => void;
  };

export const GridItem = forwardRef(
  ({ dimIfUnselected = false, ...props }: GridItemProps, ref: any) => {
    return (
      <SelectableBase {...props.selectable}>
        <img
          ref={ref}
          className={joinClasses(
            styles.root,
            ifClass(dimIfUnselected && !props.selectable?.selected, styles.dim)
          )}
          src={props.imageUrl}
        />
      </SelectableBase>
    );
  }
);
