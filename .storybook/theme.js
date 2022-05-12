import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // Base color
  colorPrimary: '#AB377A',
  colorSecondary: '#378375',

  // UI
  appBg: '#F5F5F5',
  appContentBg: '#FFFFFF',
  appBorderColor: '#DCD5D7',
  appBorderRadius: 4,

  // Typography
  // fontBase: '"Source Sans Pro", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#378375',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#DCD5D7',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  brandTitle: 'Infineon Technologies AG',
  brandUrl: 'https://infineon.com',
  brandImage: 'https://www.infineon.com/frontend/release_2022-03-1/dist/resources/img/logo-desktop-en.png',
});