import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

import App from './app';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <MuiThemeProvider>
                <Component/>
            </MuiThemeProvider>
        </AppContainer>,
        document.getElementById('react-app')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
        render(App)
    });
}