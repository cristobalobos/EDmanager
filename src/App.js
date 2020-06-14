import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Jugadores from './components/Jugadores';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Manager</h1>
      <Jugadores />
    </main>
  </Provider>
);

export default App;
