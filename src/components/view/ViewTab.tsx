import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import { ViewContent } from './ViewContent';

type Props = ComponentBaseProps & {
  tabId: string;
  activeTabId: string;
};

export function ViewTab(props: Props): (h.JSX.Element & any) | null {
  return props.tabId === props.activeTabId ? (
    <ViewContent>{props.children}</ViewContent>
  ) : null;
}
