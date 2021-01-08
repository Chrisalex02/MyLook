import React, { Component } from 'react'
import Navbar from './components/navbar/navbar';
import './App.css';

class App extends Component{
 render(){
  return (
    <div className="App">
    {/*Todos los componentes deben empezar con mayuscula*/}
      <Navbar/>
      {/*<Main />
      <Footer />*/} 
    </div>
  );
 }
}

export default App;
