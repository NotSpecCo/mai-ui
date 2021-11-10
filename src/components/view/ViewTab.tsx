import { h } from 'preact';
import { ComponentBaseProps } from '../../models';
import { ViewContent } from './ViewContent';

export type ViewTabProps = ComponentBaseProps & {
  tabId: string;
  activeTabId: string;
};

export function ViewTab(props: ViewTabProps): (h.JSX.Element & any) | null {
  return props.tabId === props.activeTabId ? (
    <ViewContent>{props.children}</ViewContent>
  ) : null;
}
