/** @jsx h */
import { Meta } from '@storybook/preact';
import { h } from 'preact';
import { List } from '.';
import { ListItem } from './ListItem';

export default {
  component: ListItem,
  title: 'Components/ListItem',
  argTypes: {
    primaryText: {
      name: 'Primary Text',
      type: { name: 'string', required: true },
      table: {
        category: 'Text',
      },
      control: { type: 'text' },
      defaultValue: 'Primary Text',
    },
    secondaryText: {
      name: 'Secondary Text',
      type: { name: 'string', required: false },
      table: {
        category: 'Text',
      },
      control: { type: 'text' },
      defaultValue: 'Secondary Text',
    },
    accentText: {
      name: 'Accent Text',
      type: { name: 'string', required: false },
      table: {
        category: 'Text',
      },
      control: { type: 'text' },
      defaultValue: 'Accent Text',
    },
    imageUrl: {
      name: 'Image URL',
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: 'https://via.placeholder.com/64',
    },
    selectable: {
      control: { type: 'object' },
      description: 'An object for handling selectable functionality.',
      defaultValue: { selected: false, shortcut: 5 },
    },
  },
} as Meta;

export const Resting = (args) => <ListItem {...args} />;

export const Selected = (args) => <ListItem {...args} />;
Selected.args = {
  selectable: { selected: true, shortcut: 5 },
};

export const Many = (args) => (
  <List>
    <ListItem {...args} />
    <ListItem {...args} />
    <ListItem {...args} />
    <ListItem {...args} />
    <ListItem {...args} />
    <ListItem {...args} />
    <ListItem {...args} />
    <ListItem {...args} />
    <ListItem {...args} />
  </List>
);
Many.args = {
  selectable: {},
};
