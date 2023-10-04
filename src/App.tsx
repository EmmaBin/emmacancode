import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import ThemeSwitcher from './components/theme/ThemeSwitcher';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
        <ThemeSwitcher />
      </div>
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
