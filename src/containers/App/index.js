import React from 'react';
import AppWrapper from './styles';
import Header from '../Header';
import MainContent from '../MainContent';
import Footer from '../Footer';

function App () {
  return (
    <div className="app">
      <AppWrapper>
        <Header />
        <MainContent />
        <Footer />
      </AppWrapper>
    </div>
  );
};

export default App;
