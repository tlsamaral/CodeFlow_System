import React from 'react';
import Header from './components/Header/Header';
import Provider from './context/Provider';
import Main from './components/Main/Main';

function App() {
  return (
    <Provider>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
