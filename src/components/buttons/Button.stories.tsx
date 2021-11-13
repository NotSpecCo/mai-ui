/** @jsx h */
import { Meta } from '@storybook/preact';
import { h } from 'preact';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    text: {
      name: 'Text',
      type: { name: 'string', required: true },
      control: { type: 'text', required: true },
      defaultValue: 'Button Text',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as Meta;

export const Primary = (args) => <Button {...args}>Button</Button>;
