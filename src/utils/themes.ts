import { Theme } from '../types/types';

export const THEMES: Theme[] = [
  {
    name: 'Makahco Light',
    primaryColor: '#fcd926',
    secondaryColor: '#121313',
    hoverPrimaryColor: '#d7b61d',
    hoverSecondaryColor: '#fcd926',
  },
  {
    name: 'Makahco Dark',
    primaryColor: '#121313',
    secondaryColor: '#fcd926',
    hoverPrimaryColor: '#1d1f20',
    hoverSecondaryColor: '#d7b61d',
  },
];

export const setCSSVariables = (theme: Theme) => {
  const documentStyle = document.documentElement.style;
  documentStyle.setProperty('--primary-color', theme.primaryColor);
  documentStyle.setProperty('--secondary-color', theme.secondaryColor);
  documentStyle.setProperty('--hover-primary-color', theme.hoverPrimaryColor);
  documentStyle.setProperty(
    '--hover-secondary-color',
    theme.hoverSecondaryColor,
  );
};
