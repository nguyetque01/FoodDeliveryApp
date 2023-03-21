import React from 'react'
import { ThemeManager, Colors } from 'react-native-ui-lib';
import Navigator from './src/Navigator';

Colors.loadColors({
  primary: '#009872'
});

const buttonTheme = {
  backgroundColor: Colors.primary,
  borderRadius: 10,
  height: 50,
  labelStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
};
ThemeManager.setComponentTheme('Button', buttonTheme);

export default function App() {
  return (
    <Navigator />
  );
}