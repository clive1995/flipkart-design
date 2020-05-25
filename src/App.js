import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./pages/component/header/headerComponent.component";
import Homepage from "./pages/homepage/homepage.component"


function App() {
  return (
    <div className="App">
      <HeaderComponent>

      </HeaderComponent>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
