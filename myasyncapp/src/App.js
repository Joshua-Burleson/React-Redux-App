import React from 'react';
import logo from './logo.svg';
import './App.css';

// State Management
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { mangaReducer } from './reducers/MangaReducer';
import { Provider } from 'react-redux';

// Components
import AppWrapper from './components/AppWrapper';

const store = createStore(mangaReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <AppWrapper />
        </header>
      </div>
    </Provider>

  );
}

export default App;
