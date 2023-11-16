import React from 'react';
import Header from './components/Header/Header';
import Provider from './context/Provider';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
