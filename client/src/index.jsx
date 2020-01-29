import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { ThemeProvider } from 'styled-components';

import * as theme from './config/theme.js';

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('app'));