/**
 * App's renderer process
 * Called by the browser when it loads itself
 *
 * Initialises React App
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/configureStore';

// import global CSS file
import './app.global.scss';

// Routes
import Routes from './routes/';

// Components
import TopBar from './components/TopBar';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <TopBar />
            <ErrorBoundary>
              <Routes></Routes>
            </ErrorBoundary>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

// Render App to DOM
ReactDOM.render(<App />, document.getElementById('root'));
