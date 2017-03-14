import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './app';

//const rootElement = document.getElementById('react-app');
//ReactDOM.render(<App />, rootElement);

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
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