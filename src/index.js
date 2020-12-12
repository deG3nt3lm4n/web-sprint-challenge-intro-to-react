import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Theme from './theme/index'
import {ThemeProvider} from 'styled-components'

ReactDOM.render(
<ThemeProvider theme={Theme}>
  <App />
</ThemeProvider>
,document.getElementById('root'));
