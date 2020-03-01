import React from 'react';
import Footer from './components/footer';
import './App.css';
import Router from './container/Router';

function App() {
  return (
    <div className="App">
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
