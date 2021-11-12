import light from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/css/light.css';
import dark from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/css/dark.css';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

export const decorators = [cssVariablesTheme];

const customViewports = {
  kaiOs: {
    name: 'KaiOS',
    styles: {
      width: '240px',
      height: '296px',
    },
    type: 'mobile',
  },
  kaiOsTall: {
    name: 'KaiOS Tall',
    styles: {
      width: '240px',
      height: '520px',
    },
    type: 'mobile',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'kaiOsTall',
  },
  cssVariables: {
    files: {
      dark,
      light,
    },
  },
};
