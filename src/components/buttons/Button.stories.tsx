/** @jsx h */
import { h } from 'preact';
import { Button } from './Button';

console.log('preact', h);

export default {
  component: Button,
  title: 'Components/Button',
  template: '<Button text="hello">Button</Button>',
};

export const Primary = () => <Button text="hello">Button</Button>;
