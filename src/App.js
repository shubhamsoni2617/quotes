import React, { Component } from 'react';
import classes from './App.module.css';
import Header from './Container/Header';
import MovieFilter from './Component/MovieFilter';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MovieFilter />
      </>
    );
  }
}
export default App;
